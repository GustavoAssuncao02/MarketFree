import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../../services/apiservice.service';
import { DadosCompartilhado } from '../form-endereco/dados';
import { Router } from '@angular/router';
import { cpf } from 'cpf-cnpj-validator';

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


  constructor(private fb: FormBuilder, private clientService: ClientService, private dadosService: DadosCompartilhado, private router: Router) {
    this.getUsuario();
  }
  
  validarCPF() {
    if (this.cpfInput.length === 11) {
      this.cpfValido = cpf.isValid(this.cpfInput);
    } else {
      this.cpfValido = false;
    }
  }
  validarNome(){
    if (this.nomeInput.length > 3) {
      this.nomeValido = true
    } else {
      this.nomeValido = false;
    }
  }
  validarNomeUsuario(){
    if (this.nomeUserInput.length > 3) {
      this.nomeUserValido = true
    } else {
      this.nomeUserValido = false;
    }
  }


  checkFields() {
    if (this.formClient.invalid) {
      alert("Por favor, preencha todos os campos.");
      return;
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
      nome: '',
      nomeDeUsuario: '',
      cpf: '',
      dataNascimento: '',
      numeroTelefone: '',
      genero: '',
      email: '',
      senha: '',
      ocupacao: '',
      politicamenteExposta: '',
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
    if (this.formClient.valid) {
      this.dadosService.setDadosFormulario(this.formClient.value);
      this.router.navigate(['/CadastroEndereco']);
      console.log(this.dadosService);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
