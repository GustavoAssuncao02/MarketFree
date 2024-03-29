import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../services/apiservice.service';
import { DadosCompartilhado } from '../form-endereco/dados';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrl: './info-usuario.component.css'
})
export class InfoUserComponent {
  cliente: any;
  endereco: any;
  estadosBrasileiros: string[] = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
    'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];
  editavel: boolean = false;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private dados: DadosCompartilhado
  ) {} 
  
  

  alterarEditavel() {
    this.editavel = !this.editavel;
  }
  atualizarEstado(campo: string, event: any) {
    const novoEstado = event.target.value;
    this.endereco[campo] = novoEstado
  }
  atualizarPoliticamenteExposto(campo: string, event: any){
    const novoStatus = event?.target.value;
    this.cliente[campo] = novoStatus
  }
  salvarEdicaoCliente(campo: string, event: any) {
    const novoValorCliente = event.target.innerText; 
    this.cliente[campo] = novoValorCliente; 
    
  }
  enviandoAoBanco(){
    this.clientService.atualizarCliente(this.cliente).subscribe( 
      (response) => {
       console.log('Dados atualizados com sucesso!');
     },
      (error) => {
       console.error('Erro ao atualizar dados:', error);
     }
  );
  this.clientService.atualizarEndereco(this.endereco).subscribe( 
    (response) => {
     console.log('Dados do endereço atualizados com sucesso!');
   },
    (error) => {
     console.error('Erro ao atualizar dados do endereço:', error);
   }
 );
 this.editavel = !this.editavel;
  }
  cancelarAlteracoes(){
    this.definirDadosUsuario();
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

  salvarEdicaoEndereco(campo: string, event: any) {
    const novoValor = event.target.innerText;
    console.log(this.endereco)
    this.endereco[campo] = novoValor;
    
  }

  exibirConfirmacao() {
    if (confirm("Tem certeza que deseja apagar a conta?")) {
      console.log(this.cliente.id)
      this.clientService.apagarConta(this.cliente.id).subscribe(
        (response) => {
          localStorage.removeItem('jwt_token');
          window.location.href = 'http://localhost:4200/excluido';
        },
        (error) => {
          console.error('Erro ao apagar conta:', error);
        }
      );
    }
  }
  

  ngOnInit(): void {
    this.definirDadosUsuario()
  }
}

 