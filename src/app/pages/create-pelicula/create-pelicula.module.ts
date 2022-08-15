import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePeliculaPageRoutingModule } from './create-pelicula-routing.module';

import { CreatePeliculaPage } from './create-pelicula.page';
import { FormPeliculaComponent } from 'src/app/components/form-pelicula/form-pelicula.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePeliculaPageRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [CreatePeliculaPage, FormPeliculaComponent]
})
export class CreatePeliculaPageModule {}
