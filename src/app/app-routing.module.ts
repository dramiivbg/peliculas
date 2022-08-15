import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'peliculas',
    loadChildren: () => import('./pages/peliculas/peliculas.module').then( m => m.PeliculasPageModule)
  },
{
  path: '',
  redirectTo: 'peliculas',
  pathMatch: 'full',

},
  {
    path: 'list-peliculas',
    loadChildren: () => import('./components/list-peliculas/list-peliculas.module').then( m => m.ListPeliculasPageModule)
  },
  {
    path: 'create-pelicula',
    loadChildren: () => import('./pages/create-pelicula/create-pelicula.module').then( m => m.CreatePeliculaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
