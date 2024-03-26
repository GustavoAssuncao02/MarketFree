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
  AtualizarEmail(novoEmail: string) {
    const dadosLogin = this.getDadosLogin();
    if (dadosLogin) {
      dadosLogin.emailOuCPF = novoEmail;
      localStorage.setItem(this.dadosLoginKey, JSON.stringify(dadosLogin));
    }
  }
  atualizarSenha(novaSenha: string) {
    const dadosLogin = this.getDadosLogin();
    if (dadosLogin) {
      dadosLogin.senha = novaSenha;
      localStorage.setItem(this.dadosLoginKey, JSON.stringify(dadosLogin));
    }
  }
  getDadosFormulario() {
    const dados = localStorage.getItem(this.dadosFormularioKey);
    return dados ? JSON.parse(dados) : null;
  }
}
