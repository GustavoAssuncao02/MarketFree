import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../component/formulario/formulario.component';
import { HomeComponent } from '../paginas/home/home.component';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { FormEnderecoComponent } from '../component/form-endereco/form-endereco.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'cadastre', component:FormComponent },
  { path: 'CadastroEndereco', component:FormEnderecoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
