import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { DadosCompartilhado } from '../form-endereco/dados';
import { ClientService } from '../../services/apiservice.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dadosCompartilhado: DadosCompartilhado,
    private clientService: ClientService,
    private router: Router,
  ) {}

  createForm() {
    this.formLogin = this.fb.group({
      emailOuCPF: '',
      senha: '',
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  verificarDados(): void {
    const dadosFormulario = this.formLogin.value;
    this.dadosCompartilhado.setDadosLogin(dadosFormulario);
    this.clientService.Login(dadosFormulario).subscribe(
      (response) => {
        console.log("aqui")
        console.log('Resposta do servidor:', response);
        if (response.success) {
          this.dadosCompartilhado.setDadosLogin(dadosFormulario);
          const token = response.token;
          localStorage.setItem('jwt_token', token);
          this.router.navigate(['/']);
        } else {
          console.error('Erro ao fazer login:', response.message);
        }
      },
      (error) => {
        alert('Credenciais inválidas');
        console.error('Erro ao fazer login:', error);
      }
    );
  }

  onSubmitLogin() {
    this.verificarDados();
  }
}
