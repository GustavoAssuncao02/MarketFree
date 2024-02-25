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
    cadastro: boolean = false;
    constructor(private router: Router) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentPage = event.url;
          this.mostrar = !(this.currentPage === '/cadastre');
          this.cadastro = (this.currentPage === '/cadastre');
        }
      });
    }
    
  }
