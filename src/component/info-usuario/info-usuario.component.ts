import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/apiservice.service';
import { AuthService } from '../../../servidor/api/auth.service';
import { DadosCompartilhado } from '../form-endereco/dados';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrl: './info-usuario.component.css'
})
export class InfoUserComponent {
  cliente: any;
  endereco: any;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private dados: DadosCompartilhado
  ) {} 

  salvarEdicaoCliente(campo: string, event: any) {
    const novoValorCliente = event.target.innerText; // Obtém o novo valor do campo editável
    this.cliente[campo] = novoValorCliente; // Atualiza o valor do cliente
    this.clientService.atualizarCliente(this.cliente).subscribe( 
       (response) => {
        console.log('Dados atualizados com sucesso!');
      },
       (error) => {
        console.error('Erro ao atualizar dados:', error);
      }
   );
  }

  salvarEdicaoEndereco(campo: string, event: any) {
    const novoValor = event.target.innerText; // Obtém o novo valor do campo editável
    this.endereco[campo] = novoValor; // Atualiza o valor do endereço
    this.clientService.atualizarEndereco(this.endereco).subscribe( 
       (response) => {
        console.log('Dados do endereço atualizados com sucesso!');
      },
       (error) => {
        console.error('Erro ao atualizar dados do endereço:', error);
      }
    );
  }

  ngOnInit(): void {
    console.log(this.dados.getDadosLogin());
    const emailOuCPF = this.dados.getDadosLogin().emailOuCPF;
    this.clientService.getUsuariosEspecifico(emailOuCPF).subscribe(
      (response) => {
        this.cliente = response.data;
        console.log(this.cliente);
        this.clientService.getEndereco(this.cliente.idEndereco).subscribe(
          (response) => {
            this.endereco = response.data;
            console.log(this.endereco);          
          },
          (error) => {
            console.error(error);
          }
        );
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

 