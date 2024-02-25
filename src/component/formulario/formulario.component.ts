import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/apiservice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormComponent implements OnInit {
  clientArray: any[] = [];
  isResultLoaded = false;
  formClient!: FormGroup;

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
    console.log(this.formClient.value);
    this.register();
  }
}

