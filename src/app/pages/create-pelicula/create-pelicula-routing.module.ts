import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePeliculaPage } from './create-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePeliculaPageRoutingModule {}
