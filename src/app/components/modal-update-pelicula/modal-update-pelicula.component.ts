import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { Pelicula } from 'src/app/model/pelicula';
import { CrudApiService } from 'src/app/services/crud-api.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-modal-update-pelicula',
  templateUrl: './modal-update-pelicula.component.html',
  styleUrls: ['./modal-update-pelicula.component.scss'],
})
export class ModalUpdatePeliculaComponent implements OnInit {

  public form: FormGroup;

  public pelicula: Pelicula;

  public  categorias: Categoria[];

  public categoriaSubscripcion = new Subscription();

  public peliculaSubscripcion = new Subscription();

  constructor(public messageService: MessageService, public crudApiService:CrudApiService) {


    this.categoriaSubscripcion = this.crudApiService.allCategoria$().subscribe((res: Categoria[]) => {

      this.categorias = res;

    


    });


    this.crudApiService.allCategoria().subscribe();


    this.pelicula = new Pelicula();

    this.pelicula = messageService.getPelicula();


    console.log(this.pelicula.name);

    this.form = new FormGroup({

     

        name : new  FormControl(this.pelicula.name, [Validators.required]),
        id_categoria : new  FormControl(this.pelicula.category.name, [Validators.required]),
  
        year : new  FormControl(this.pelicula.year, [Validators.required]),
        
  
      });
      
    
   }

  ngOnInit() {}


  update(data){

  this.pelicula.name = data.name;
  this.pelicula.year = data.year;

  this.categorias.forEach((item: Categoria) => {

    if(item.categoryId == data.id_categoria){

      this.pelicula.category = item;
    }
  });


    this.crudApiService.updateP(this.pelicula);


    this.peliculaSubscripcion = this.crudApiService.getPelicula$().subscribe((res:Pelicula) => {

      console.log(res);

    });
  }

}
