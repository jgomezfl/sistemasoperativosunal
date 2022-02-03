import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DibujanteComponent } from './components/dibujante/dibujante.component';
import { AdivanadorComponent } from './components/adivanador/adivanador.component';

const routes: Routes = [
  {
    path: '',
    component: DibujanteComponent
  },
  {
    path: 'adivinar',
    component: AdivanadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
