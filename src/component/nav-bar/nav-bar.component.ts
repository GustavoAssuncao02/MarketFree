  import { Component } from '@angular/core';
  import { Router, NavigationEnd } from '@angular/router';

  @Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
  })
  export class NavBarComponent {
    currentPage: string = '';
    mostrar: boolean = true;
    logado: boolean = false;
    cadastro: boolean = false;
    login: boolean = false;
    constructor(private router: Router) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentPage = event.url;
          this.mostrar = !(this.currentPage === '/cadastre' || this.currentPage === '/CadastroEndereco' || this.currentPage === '/Login');
          this.cadastro = (this.currentPage === '/cadastre' || this.currentPage === '/CadastroEndereco' )
          this.login = (this.currentPage === '/Login')
          this.logado = !(this.currentPage === '/' || this.currentPage === '/CadastroEndereco'  || this.currentPage === '/cadastre' || this.currentPage === '/Login');
        }
      });
    }
    
  }
