import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../services/apiservice.service';
import { AuthService } from '../../../../servidor/api/auth.service';
import { DadosCompartilhado } from '../form-endereco/dados';

@Component({
  selector: 'app-dados-seguranca',
  templateUrl: './dados-seguranca.component.html',
  styleUrl: './dados-seguranca.component.css'
})
export class DadosSegurancaComponent {



  cliente: any;
  endereco: any;
  editavel:boolean = false;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private dados: DadosCompartilhado
  ) {}

  alterarEditavel() {
    this.editavel = !this.editavel
  }

    enviarAoServidor(){
      this.clientService.atualizarClienteSeguranca(this.cliente).subscribe( 
         (response) => {
          console.log('Dados atualizados com sucesso!');
          
        },
         (error) => {
          console.error('Erro ao atualizar dados:', error);
        }
     );
     this.editavel = !this.editavel
     this.dados.AtualizarEmail(this.cliente.email)
     this.dados.atualizarSenha(this.cliente.senha)
    }

  salvarEdicaoUsuario(campo: string, event: any) {
    const novoValorCliente = event.target.innerText; 
    this.cliente[campo] = novoValorCliente;     
  }
  cancelarAlteracoes(){
    this.cliente = this.definirDadosUsuario()
    this.editavel = !this.editavel;
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
    this.definirDadosUsuario()
  }
}

