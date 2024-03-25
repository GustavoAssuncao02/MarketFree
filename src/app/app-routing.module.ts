import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './Paginas/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormEnderecoComponent } from './components/form-endereco/form-endereco.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InfoUserComponent } from './components/info-usuario/info-usuario.component';
import { DadosUsuarioComponent } from './components/dados-usuario/dados-usuario.component';
import { DadosSegurancaComponent } from './components/dados-seguranca/dados-seguranca.component';
import { CadastreComponent } from './Paginas/cadastro/cadastre.component';
import { CadastroEnderecoComponent } from './Paginas/cadastro-endereco/cadastro-endereco.component';
import { LoginPageComponent } from './Paginas/login-page/login-page.component';
import { PerfilPageComponent } from './Paginas/perfil-page/perfil-page.component';
import { InformacoesComponent } from './Paginas/informacoes-usuario/informacoes.component';
import { DadosSegurancaPageComponent } from './Paginas/dados-seguranca-page/dados-seguranca-page.component';
const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'cadastre', component:CadastreComponent },
  { path: 'CadastroEndereco', component:CadastroEnderecoComponent },
  { path: 'Login' , component: LoginPageComponent},
  { path: 'perfil' , component: PerfilPageComponent},
  { path: 'informações' , component: InformacoesComponent},
  { path: 'dados' , component: DadosUsuarioComponent},
  { path: 'segurança' , component: DadosSegurancaPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
