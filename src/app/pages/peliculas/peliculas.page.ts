import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { Pelicula } from 'src/app/model/pelicula';
import { CrudApiService } from 'src/app/services/crud-api.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

public  categorias: Categoria[];

public peliculas: Pelicula[];

public categoriaSubscripcion = new Subscription();

public peliculaSubscripcion = new Subscription();

  constructor(public crudApiService: CrudApiService) { }

  ngOnInit() {


    this.categoriaSubscripcion = this.crudApiService.allCategoria$().subscribe((res: Categoria[]) => {

      this.categorias = res;

      console.log(this.categorias);



    });


    this.peliculaSubscripcion = this.crudApiService.allPelicula$().subscribe((res: Pelicula[]) => {

      this.peliculas = res;

      console.log(this.peliculas);
    });




    this.crudApiService.allCategoria().subscribe();

    this.crudApiService.allPelicula().subscribe();
    



  }

}
