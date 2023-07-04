import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { GridCategoriasComponent } from './grid-categorias/grid-categorias.component';



@NgModule({
  declarations: [
    MainMenuComponent,
    ReproductorComponent,
    CategoriasComponent,
    GridCategoriasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainMenuComponent,
    ReproductorComponent,
    CategoriasComponent,
    GridCategoriasComponent
  ]
})
export class GeneralesModule { }
