import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { DetalleComponent } from './vistas/detalle/detalle.component';

const routes: Routes = [
  /*Yo puedo especificar qué vista quiero que me carge al iniciar mi aplicación:  
  {path: '', component: HomeComponent }, 
  En este caso le digo que cuando la ruta este vacia, quiero que me cargue el componente Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  En este caso le digo que cuando la ruta este vacia, me genere una redirección a /home, para ello debo haber especificado antes la ruta a home*/
  {path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'detalle', component: DetalleComponent },
  //Para generar una redirección a home cuando la ruta sea errónea marcamos dos asteriscos en el path para indicar que haga referencia a cualquier ruta al margen de las que se han especificado anteriormente.
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
