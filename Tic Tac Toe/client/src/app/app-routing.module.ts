import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './components/join/join.component';
import { TableroComponent } from './components/tablero/tablero.component';

const routes: Routes = [
  {
    path: '',
    component: JoinComponent
  },
  {
    path: 'juego/:room/:id',
    component: TableroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
