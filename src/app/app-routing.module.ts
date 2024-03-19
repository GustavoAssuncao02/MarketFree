import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../component/formulario/formulario.component';
import { HomeComponent } from '../paginas/home/home.component';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { FormEnderecoComponent } from '../component/form-endereco/form-endereco.component';
import { LoginComponent } from '../component/login/login.component';
import { PerfilComponent } from '../component/perfil/perfil.component';
import { InfoUserComponent } from '../component/info-usuario/info-usuario.component';
import { DadosUsuarioComponent } from '../component/dados-usuario/dados-usuario.component';
import { DadosSegurancaComponent } from '../component/dados-seguranca/dados-seguranca.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'cadastre', component:FormComponent },
  { path: 'CadastroEndereco', component:FormEnderecoComponent },
  { path: 'Login' , component: LoginComponent},
  { path: 'perfil' , component: PerfilComponent},
  { path: 'informações' , component: InfoUserComponent},
  { path: 'dados' , component: DadosUsuarioComponent},
  { path: 'segurança' , component: DadosSegurancaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
