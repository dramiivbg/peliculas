import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPeliculasPage } from './list-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: ListPeliculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPeliculasPageRoutingModule {}
