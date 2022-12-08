import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AggModComponent } from './Components/agg-mod/agg-mod.component';
import { ListadoComponent } from './Components/listado/listado.component';
import { VerComponent } from './Components/ver/ver.component';

@NgModule({
  declarations: [
    AppComponent,
    AggModComponent,
    ListadoComponent,
    VerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
