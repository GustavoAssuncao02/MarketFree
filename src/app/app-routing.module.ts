import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../component/formulario/formulario.component';
import { HomeComponent } from '../paginas/home/home.component';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { FormEnderecoComponent } from '../component/form-endereco/form-endereco.component';
import { LoginComponent } from '../component/login/login.component';
import { PerfilComponent } from '../component/perfil/perfil.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'cadastre', component:FormComponent },
  { path: 'CadastroEndereco', component:FormEnderecoComponent },
  { path: 'Login' , component: LoginComponent},
  { path: 'perfil' , component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
