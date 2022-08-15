import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula';
import { MessageService } from 'src/app/services/message.service';

import { ModalController } from '@ionic/angular';
import { ModalOptionPeliculaComponent } from '../modal-option-pelicula/modal-option-pelicula.component';

@Component({
  selector: 'app-list-peliculas',
  templateUrl: './list-peliculas.page.html',
  styleUrls: ['./list-peliculas.page.scss'],
})
export class ListPeliculasPage implements OnInit {


  @Input() pelicula: Pelicula[];
 
  constructor(public modalController: ModalController,public messageService: MessageService) { }

  ngOnInit() {

   
  }


  async modal(pelicula: Pelicula){

    this.messageService.setPelicula(pelicula);
  
  
    const modal = await this.modalController.create({
  component: ModalOptionPeliculaComponent,
  cssClass: 'my-custom-class',
  
  });
  return await modal.present();
  }

}
