import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../services/apiservice.service';
import { AuthService } from '../../../../servidor/api/auth.service';
import { DadosCompartilhado } from '../form-endereco/dados';
@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrl: './dados-usuario.component.css'
})
export class DadosUsuarioComponent {
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
    this.clientService.atualizarClienteDados(this.cliente).subscribe( 
       (response) => {
        console.log('Dados atualizados com sucesso!');
      },
       (error) => {
        console.error('Erro ao atualizar dados:', error);
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
