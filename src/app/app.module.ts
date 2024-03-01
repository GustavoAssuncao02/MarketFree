import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from '../component/formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { CarrosselComponent } from '../component/carrossel/carrossel.component';
import { ProdutosComponent } from '../component/produtos/produtos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../paginas/home/home.component';
import { FormEnderecoComponent } from '../component/form-endereco/form-endereco.component';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { LoginComponent } from '../component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarrosselComponent,
    ProdutosComponent,
    FormComponent,
    HomeComponent,
    FormEnderecoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [], 
  bootstrap: [AppComponent]
  
})
export class AppModule { }
