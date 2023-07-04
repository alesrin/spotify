import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './generales/categorias/categorias.component';
import { GridCategoriasComponent } from './generales/grid-categorias/grid-categorias.component';

const routes: Routes = [
  { path:'gridprincipal', component: GridCategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
