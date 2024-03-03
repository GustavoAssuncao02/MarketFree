import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhado {
  dadosFormulario: any;
  dadosLogin : any;

  constructor() { }

  setDadosFormulario(dados: any) {
    this.dadosFormulario = dados;
  }


  setDadosLogin(dados: any) {
    this.dadosLogin = dados;
  } 

  getDadosFormulario() {
    return this.dadosFormulario;
  }
}
