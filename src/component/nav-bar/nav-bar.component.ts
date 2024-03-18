import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  verificarTokenJWT(): boolean {
    const token = localStorage.getItem('jwt_token');
    return !!token;
  }

  currentPage: string = '';
  mostrar: boolean = true;
  logado: boolean = false;
  cadastro: boolean = false;
  login: boolean = false;

  constructor(private router: Router) {
    console.log(this.verificarTokenJWT());
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.url;
        this.mostrar = !(this.currentPage === '/cadastre' || this.currentPage === '/CadastroEndereco' || this.currentPage === '/Login'
        );
        this.cadastro =this.currentPage === '/cadastre' || this.currentPage === '/CadastroEndereco'; this.login = this.currentPage === '/Login'; this.logado = this.verificarTokenJWT();
        this.login = !(this.currentPage === '/Login'
        );
      }
    });
  }
  sair(){
    localStorage.removeItem('jwt_token');
    window.location.href = 'http://localhost:4200';
  }
}
