import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ClientService } from '../../services/apiservice.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  constructor(private clientService: ClientService) {
    
  }

  Obterusuario(){
    this.clientService.getUsuarios();
  }
}
