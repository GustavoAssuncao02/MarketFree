import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhado {
  dadosFormulario: any;

  constructor() { }

  setDadosFormulario(dados: any) {
    this.dadosFormulario = dados;
  }

  getDadosFormulario() {
    return this.dadosFormulario;
  }
}
