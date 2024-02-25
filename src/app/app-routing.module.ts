import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../component/formulario/formulario.component';
import { HomeComponent } from '../paginas/home/home.component';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'cadastre', component:FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
