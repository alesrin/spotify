import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralesModule } from './generales/generales.module';
import { VistasModule } from './vistas/vistas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralesModule,
    VistasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
