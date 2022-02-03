import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DibujanteComponent } from './components/dibujante/dibujante.component';
import { AdivanadorComponent } from './components/adivanador/adivanador.component';

@NgModule({
  declarations: [
    AppComponent,
    DibujanteComponent,
    AdivanadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
