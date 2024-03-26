import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './components/formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Paginas/home/home.component';
import { FormEnderecoComponent } from './components/form-endereco/form-endereco.component';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InfoUserComponent } from './components/info-usuario/info-usuario.component';
import { DadosUsuarioComponent } from './components/dados-usuario/dados-usuario.component';
import { DadosSegurancaComponent } from './components/dados-seguranca/dados-seguranca.component';
import { CadastreComponent } from './Paginas/cadastro/cadastre.component';
import { CadastroEnderecoComponent } from './Paginas/cadastro-endereco/cadastro-endereco.component';
import { CadastroSucessoComponent } from './Paginas/cadastro-sucesso/cadastro-sucesso.component';
import { LoginPageComponent } from './Paginas/login-page/login-page.component';
import { PerfilPageComponent } from './Paginas/perfil-page/perfil-page.component';
import { InformacoesComponent } from './Paginas/informacoes-usuario/informacoes.component';
import { DadosComponent } from './Paginas/dados-usuario-page/dados.component';
import { DadosSegurancaPageComponent } from './Paginas/dados-seguranca-page/dados-seguranca-page.component';
import { CadastradoSucessoComponent } from './components/cadastrado-sucesso/cadastrado-sucesso.component';
import { ContaExcluidaComponent } from './Paginas/conta-excluida/conta-excluida.component';
import { ExclusaoComponent } from './components/exclusao/exclusao.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarrosselComponent,
    ProdutosComponent,
    FormComponent,
    HomeComponent,
    FormEnderecoComponent,
    LoginComponent,
    PerfilComponent,
    InfoUserComponent,
    DadosUsuarioComponent,
    DadosSegurancaComponent,
    CadastreComponent,
    CadastroEnderecoComponent,
    CadastroSucessoComponent,
    LoginPageComponent,
    PerfilPageComponent,
    InformacoesComponent,
    DadosComponent,
    DadosSegurancaPageComponent,
    CadastradoSucessoComponent,
    ContaExcluidaComponent,
    ExclusaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  
  providers: [], 
  bootstrap: [AppComponent]
  
})
export class AppModule { }
