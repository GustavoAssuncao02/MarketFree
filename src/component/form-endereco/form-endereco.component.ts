import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../../services/apiservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DadosCompartilhado } from './dados';

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

  constructor(private fb: FormBuilder, private clientService: ClientService, private dadosService: DadosCompartilhado) {
    this.dadosFormulario = this.dadosService.getDadosFormulario();
    this.getUsuario();
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
      cep: '',
      endereco: '',
      cidade: '',
      numero: '',
      complemento: '',
      genero: '',
      estado: '',
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

  onSubmitEndereco() {
    this.registerEndereco();
  }
}

