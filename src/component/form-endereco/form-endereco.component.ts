import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../../services/apiservice.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrl: './form-endereco.component.css'
})
export class FormEnderecoComponent {
  clientArray: any[] = [];
  isResultLoaded = false;
  formEndereco!: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.getUsuario();
  }

  getUsuario() {
    this.clientService.getAllClients().subscribe(
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
      const bodyData = this.formEndereco.value;

      this.clientService.addEndereco(bodyData).subscribe({
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
    console.log(this.formEndereco.value);
    this.registerEndereco();
  }
}

