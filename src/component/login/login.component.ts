import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { DadosCompartilhado } from '../form-endereco/dados';
import { ClientService } from '../../services/apiservice.service';
import { Router } from '@angular/router';

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
    private router: Router
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

  onSubmitLogin() {
    const dadosFormulario = this.formLogin.value;
    this.dadosCompartilhado.setDadosLogin(dadosFormulario);
    this.clientService.Login(dadosFormulario).subscribe(
      (response) => {
        console.log('Resposta do servidor:', response);
        if (response.success) {
          this.dadosCompartilhado.setDadosLogin(dadosFormulario);
          this.router.navigate(['/']);
        } else {
          console.error('Erro ao fazer login:', response.message);
        }
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
      }

    );
  }
}
