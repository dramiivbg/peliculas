import { Injectable } from '@angular/core';
import { Pelicula } from '../model/pelicula';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public pelicula: Pelicula;

  constructor() { }


  setPelicula(pelicula: Pelicula){

    this.pelicula = pelicula;
  }


  getPelicula(){

    return this.pelicula;

    
  }
}
