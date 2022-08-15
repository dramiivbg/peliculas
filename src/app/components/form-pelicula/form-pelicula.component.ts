import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { Pelicula } from 'src/app/model/pelicula';
import { CrudApiService } from 'src/app/services/crud-api.service';


@Component({
  selector: 'app-form-pelicula',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.scss'],
})
export class FormPeliculaComponent implements OnInit {

  @Input() categorias$: Categoria[];


  public form: FormGroup;

  public pelicula: Pelicula;

  public categoria: Categoria;

  constructor(public crudApiService: CrudApiService, public router: Router) { }

  ngOnInit() {


    
    
    this.form = new FormGroup({

     

      name : new  FormControl('', [Validators.required]),
      
      id_categoria : new  FormControl('', [Validators.required]),
      

      year : new  FormControl('0', [Validators.required, Validators.minLength(4)]),
      

    });
  }


  create(pelicula){


    this.pelicula = new Pelicula();

  this.pelicula.name = pelicula.name;
  this.pelicula.year = Number(pelicula.year);

  this.categorias$.forEach((item: Categoria) => {

    if(item.categoryId == pelicula.id_categoria){

      this.pelicula.category = item;
    }
  })

  
  this.crudApiService.create(this.pelicula);
    }
}
