import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula';
import { CrudApiService } from 'src/app/services/crud-api.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-modal-option-pelicula',
  templateUrl: './modal-option-pelicula.component.html',
  styleUrls: ['./modal-option-pelicula.component.scss'],
})
export class ModalOptionPeliculaComponent implements OnInit {

  public pelicula: Pelicula;

  constructor(public messageService: MessageService, public crudApiService: CrudApiService) { }

  ngOnInit() {


    this.pelicula = new Pelicula();


    this.pelicula = this.messageService.getPelicula();

    console.log(this.pelicula);

  }


  delete(){



    this.crudApiService.delete(this.pelicula.movieId);



  }

  update(){

    this.crudApiService.update(this.pelicula);

  }

}
