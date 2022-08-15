import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPeliculasPageRoutingModule } from './list-peliculas-routing.module';

import { ListPeliculasPage } from './list-peliculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPeliculasPageRoutingModule
  ],
  declarations: [ListPeliculasPage]
})
export class ListPeliculasPageModule {}
