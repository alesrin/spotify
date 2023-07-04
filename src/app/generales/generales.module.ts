import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { GridCategoriasComponent } from './grid-categorias/grid-categorias.component';
import { SliderCategoriasComponent } from './slider-categorias/slider-categorias.component';



@NgModule({
  declarations: [
    MainMenuComponent,
    ReproductorComponent,
    CategoriasComponent,
    GridCategoriasComponent,
    SliderCategoriasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainMenuComponent,
    ReproductorComponent,
    CategoriasComponent,
    GridCategoriasComponent,
    SliderCategoriasComponent
  ]
})
export class GeneralesModule { }
