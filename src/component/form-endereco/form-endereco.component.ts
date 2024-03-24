import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../../services/apiservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DadosCompartilhado } from './dados';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrl: './form-endereco.component.css'
})
export class FormEnderecoComponent {
  clientArray: any[] = [];
  isResultLoaded = false;
  formEndereco!: FormGroup;
  dadosFormulario: any;
  mensagemErro: boolean = false;

  constructor(private fb: FormBuilder, private clientService: ClientService, private dadosService: DadosCompartilhado, private router: Router) {
    this.dadosFormulario = this.dadosService.getDadosFormulario();
    this.getUsuario();
  }
  

  get cepControl() {
    return this.formEndereco.get('cep');
  }

  isCepInvalid() {
    const control = this.cepControl;
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  getUsuario() {
    this.clientService.getUsuarios().subscribe(
      (resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.clientArray = resultData.data;
      },
      (error: any) => {
        console.log('erro ao buscar dados: ', error);
      }
    );
  }

  
  createForm() {
    this.formEndereco = this.fb.group({
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
      //genero: '',
      estado: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createForm();
  }
  
  register() {
    console.log('Dados enviados para o servidor:', this.formEndereco.value);

    if (this.formEndereco.valid) {
      const bodyData = this.formEndereco.value;

      this.clientService.addClient(bodyData).subscribe({
        next: (resultData: any) => {
          console.log(resultData);
          alert('Sucesso ao registrar');
          this.getUsuario();
        },
        error: (error: any) => {
          console.error('Erro ao registrar:', error);
        },
      });
    }
  } 

  registerEndereco() {
    console.log('Dados enviados para o servidor:', this.formEndereco.value);

    if (this.formEndereco.valid) {
      const bodyDataEndereco = this.formEndereco.value; // Dados do formulário de endereço
      const bodyDataCliente = this.dadosService.getDadosFormulario(); // Dados do formulário de cliente
      console.log("dados do cliente:")
      console.log(bodyDataCliente)
      this.clientService.addUsuario(bodyDataEndereco, bodyDataCliente).subscribe({
        next: (resultData: any) => {
          console.log(resultData);
          alert('Sucesso ao registrar');
          this.getUsuario();
        },
        error: (error: any) => {
          console.error('Erro ao registrar:', error);
        },
      });
    }
  }
  todosCamposPreenchidos(): boolean {
    const controls = this.formEndereco.controls;
    for (const controlName in controls) {
      if (controls.hasOwnProperty(controlName)) {
        const control = controls[controlName];
        if (control.invalid || !control.value) {
          return false;
        }
      }
    }
    return true;
  }


  onSubmitEndereco() {
    if (this.todosCamposPreenchidos()) {
      this.registerEndereco();
      this.router.navigate(['/']);
    }else{
      this.mensagemErro = true;
    }
  }
}

