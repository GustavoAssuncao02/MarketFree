import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './Paginas/home/home.component';
import { DadosUsuarioComponent } from './components/dados-usuario/dados-usuario.component';
import { CadastreComponent } from './Paginas/cadastro/cadastre.component';
import { CadastroEnderecoComponent } from './Paginas/cadastro-endereco/cadastro-endereco.component';
import { LoginPageComponent } from './Paginas/login-page/login-page.component';
import { PerfilPageComponent } from './Paginas/perfil-page/perfil-page.component';
import { InformacoesComponent } from './Paginas/informacoes-usuario/informacoes.component';
import { DadosSegurancaPageComponent } from './Paginas/dados-seguranca-page/dados-seguranca-page.component';
import { CadastroSucessoComponent } from './Paginas/cadastro-sucesso/cadastro-sucesso.component';
import { ContaExcluidaComponent } from './Paginas/conta-excluida/conta-excluida.component';
const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'cadastre', component:CadastreComponent },
  { path: 'CadastroEndereco', component:CadastroEnderecoComponent },
  { path: 'Login' , component: LoginPageComponent},
  { path: 'perfil' , component: PerfilPageComponent},
  { path: 'informações' , component: InformacoesComponent},
  { path: 'dados' , component: DadosUsuarioComponent},
  { path: 'segurança' , component: DadosSegurancaPageComponent},
  { path: 'cadastrado' , component: CadastroSucessoComponent},
  { path: 'excluido' , component: ContaExcluidaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
