import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClientService } from '../../../services/apiservice.service';
import { DadosCompartilhado } from '../form-endereco/dados';
import { Router } from '@angular/router';
import { cpf } from 'cpf-cnpj-validator';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormComponent implements OnInit {

  clientArray: any[] = [];
  isResultLoaded = false;
  formClient!: FormGroup;
  cpfInput: string = '';
  cpfValido: boolean = false;
  nomeInput: string = '';
  nomeValido: boolean = false;
  nomeUserValido: boolean = false;
  nomeUserInput: string = '';
  numeroInput: string = '';
  numeroValido: boolean = false;
  emailInput: string = '';
  emailValido: boolean = false;
  mensagemErro: boolean = false;
  ocupacaoInput: string = '';
  ocupacaoValido: boolean = false;
  senhaInput: string = '';
  senhaValido: boolean = false;

  constructor(private fb: FormBuilder, private clientService: ClientService, private dadosService: DadosCompartilhado, private router: Router) {
    this.getUsuario();
  }
  
  validarSenha() {
    if (this.senhaInput.length >= 5) {
      this.senhaValido = true
    } else {
      this.senhaValido = false;
    }
    }

  get emailControl() {
    return this.formClient.get('email');
  }
  exibirErroEmail() {
    const emailField = this.emailControl;
    return emailField && emailField.invalid && (emailField.dirty || emailField.touched);
  }
 
  validarCPF() {
    if (this.cpfInput.length === 11) {
      this.cpfValido = cpf.isValid(this.cpfInput);
    } else {
      this.cpfValido = false;
    }
  }
  validarNumero() {
    if (this.numeroInput.length === 11) {
      this.numeroValido = true
    } else {
      this.numeroValido = false;
    }
  }
  validarNome(){
    if (this.nomeInput.length > 3) {
      this.nomeValido = true
    } else {
      this.nomeValido = false;
    }
  }
  validarOcupacao(){
    if (this.ocupacaoInput.length > 3) {
      this.ocupacaoValido = true
    } else {
      this.ocupacaoValido = false;
    }
  }

  validarNomeUsuario(){
    if (this.nomeUserInput.length > 3) {
      this.nomeUserValido = true
    } else {
      this.nomeUserValido = false;
    }
  }


  verificarCampos() {
    if (this.formClient.valid) {
      this.dadosService.setDadosFormulario(this.formClient.value);
      this.router.navigate(['/CadastroEndereco']);
      console.log(this.dadosService);
    } else {
      this.mensagemErro = true;
    }
  }
  

  getUsuario() {
    this.clientService.getUsuarios().subscribe(
      (resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.clientArray = resultData.data;
      },
      (error) => {
        console.log('erro ao buscar dados: ', error);
      }
    );
  }

  createForm() {
    this.formClient = this.fb.group({
      nome: ['', Validators.required],
      nomeDeUsuario: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      numeroTelefone: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      ocupacao: ['', Validators.required],
      politicamenteExposta: ['', Validators.required],
    });
  }
  

  ngOnInit(): void {
    this.createForm();
    console.log(this.dadosService);
  }
  
  register() {
    console.log('Dados enviados para o servidor:', this.formClient.value);

    if (this.formClient.valid) {
      const bodyData = this.formClient.value;

      this.clientService.addClient(bodyData).subscribe({
        next: (resultData: any) => {
          console.log(resultData);
          alert('Sucesso ao registrar');
          this.getUsuario();
        },
        error: (error) => {
          console.error('Erro ao registrar:', error);
        },
      });
    }
  } 

  onSubmit() {
    this.verificarCampos();
  }
}
