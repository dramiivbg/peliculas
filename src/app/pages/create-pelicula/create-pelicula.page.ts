import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { Pelicula } from 'src/app/model/pelicula';
import { CrudApiService } from 'src/app/services/crud-api.service';

@Component({
  selector: 'app-create-pelicula',
  templateUrl: './create-pelicula.page.html',
  styleUrls: ['./create-pelicula.page.scss'],
})
export class CreatePeliculaPage implements OnInit {

  public categorias: Categoria[];

  public categoriasSubscripcion = new Subscription();


  constructor(public crudApiService: CrudApiService) { }

  ngOnInit() {


    this.categoriasSubscripcion = this.crudApiService.allCategoria$().subscribe((res: Categoria[]) => {

      this.categorias = res;
    });


    this.crudApiService.allCategoria().subscribe();
  }

}
