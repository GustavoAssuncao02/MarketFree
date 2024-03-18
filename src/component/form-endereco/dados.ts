import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhado {
  private readonly dadosFormularioKey = 'dadosFormulario';
  private readonly dadosLoginKey = 'dadosLogin';

  constructor() { }

  setDadosFormulario(dados: any) {
    localStorage.setItem(this.dadosFormularioKey, JSON.stringify(dados));
  }

  setDadosLogin(dados: any) {
    localStorage.setItem(this.dadosLoginKey, JSON.stringify(dados));
  } 
  
  getDadosLogin() {
    const dados = localStorage.getItem(this.dadosLoginKey);
    return dados ? JSON.parse(dados) : null;
  } 

  getDadosFormulario() {
    const dados = localStorage.getItem(this.dadosFormularioKey);
    return dados ? JSON.parse(dados) : null;
  }
}
