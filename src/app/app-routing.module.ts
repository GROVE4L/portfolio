import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { HomeComponent } from 'src/app/components/home/home.component'
import { TrabajosComponent } from 'src/app/components/trabajos/trabajos.component'
import { ContactoComponent } from 'src/app/components/contacto/contacto.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: HomeComponent } //Siempre al ultimo (Error 404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
