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
  editavel: boolean = false;
enviandoAoBanco() {
  this.clientService.atualizarClienteDados(this.cliente).subscribe( 
    (response) => {
     console.log('Dados atualizados com sucesso!');
   },
    (error) => {
     console.error('Erro ao atualizar dados:', error);
   }
);
this.dados.AtualizarEmail(this.cliente.email)

this.editavel = !this.editavel;
}
cancelarAlteracoes() {
  this.cliente = this.definirDadosUsuario()
  this.editavel = !this.editavel;
}
alterarEditavel() {
 this.editavel = !this.editavel;
}
  

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private dados: DadosCompartilhado
  ) {}

  salvarEdicaoUsuario(campo: string, event: any){
    const novoValorCliente = event.target.innerText; 
    this.cliente[campo] = novoValorCliente; 
  }


  salvarEdicaoCliente(campo: string, event: any) {
    const novoValorCliente = event.target.innerText;
    this.cliente[campo] = novoValorCliente;
    
  }
  definirDadosUsuario(){
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
  ngOnInit(): void {
    console.log(this.dados.getDadosLogin());
    this.definirDadosUsuario()
  }
}
