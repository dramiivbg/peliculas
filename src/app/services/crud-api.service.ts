import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import {map, catchError, finalize} from 'rxjs/operators';
import { Categoria } from '../model/categoria';
import { Pelicula } from '../model/pelicula';
import { MessageService } from './message.service';
import { ModalController } from '@ionic/angular';
import { ModalUpdatePeliculaComponent } from '../components/modal-update-pelicula/modal-update-pelicula.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AlertController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class CrudApiService {

  public categorias: Categoria[] = [];
  public categoria: Categoria;
  public categoria$ = new Subject<Categoria>(); 
  public categorias$ = new Subject<Categoria[]>();

  handlerMessage = '';
  roleMessage = '';
  
  public peliculas: Pelicula[] = [];
  public pelicula: Pelicula;
  public pelicula$ = new Subject<Pelicula>(); 
  public peliculas$ = new Subject<Pelicula[]>();

  public url = environment.urlCategories;
  public urlP = environment.urlMovies;


  public header = {
    'Content-Type': 'application/json',
    'plureApiKey': environment.apikey
};

  constructor(public http: HttpClient,public messageService: MessageService,
    public modalController: ModalController,public router : Router,
    private alertController: AlertController) { }


  allCategoria$(): Observable<Categoria[]>{

    return this.categorias$.asObservable();
  }

  allPelicula$(): Observable<Pelicula[]>{

    return this.peliculas$.asObservable();
  }

  getPelicula$(): Observable<Pelicula>{

    return this.pelicula$.asObservable();

  }



  allCategoria(){

    this.categorias = [];
    return this.http.get<Categoria[]>(this.url)
     .pipe(

      map((res: any[]) => {


        if(res.length > 0){

          res.forEach((item: any) => {

            this.categoria = new Categoria();
            this.categoria.set(item);
            this.categorias.push(this.categoria);
          });
        }

        this.categorias$.next(this.categorias);
      

      })
     )
  }



  allPelicula(){

    this.peliculas = [];
    return this.http.get<Pelicula[]>(this.urlP)
     .pipe(

      map((res: any[]) => {


        if(res.length > 0){

          res.forEach((item: any) => {

            this.pelicula = new Pelicula();
            this.pelicula.set(item);
            this.peliculas.push(this.pelicula);
          });
        }

        this.peliculas$.next(this.peliculas);


      })
     )
  }



  create(pelicula: Pelicula){


    return this.http.post<Pelicula>(this.urlP,pelicula,{headers: this.header})
      .pipe(
        map((res:any) => {

          this.pelicula = new Pelicula();

          this.pelicula.set(res);

          this.pelicula$.next(this.pelicula);

          

        })
      ).subscribe(res => {
        Swal.fire({
          title: 'quieres crear otro?',
          text: "creado correctamente",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (!result.isConfirmed) {
          
            this.router.navigate(['/']);
          }
        })
        });
    
    
    
  }


 async update(pelicula: Pelicula){


    this.messageService.setPelicula(pelicula);

 
    const modal = await this.modalController.create({
      component: ModalUpdatePeliculaComponent,
      cssClass: 'my-custom-class',
     
    });
    return await modal.present();
    
    

    



  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'successfully',
      subHeader: 'Important message',
      message: 'se ha actualizado correctamente!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  async delet() {
    const alert = await this.alertController.create({
      header: 'successfully',
      subHeader: 'Important message',
      message: 'se ha eliminado correctamente!',
      buttons: ['OK'],
    });

    await alert.present();
  }




public updateP(pelicula: Pelicula){
 
   
 
   
    return this.http.patch<Pelicula>(this.urlP + '/'+pelicula.movieId , pelicula,            {
      headers : this.header
  })
     .pipe(
       map((res: any) => {
  
         
  
         
           this.pelicula = new Pelicula();
  
            
  
         
           this.pelicula.set(res);
  
  
           this.pelicula$.next(this.pelicula);
  
         
       
       })).subscribe(res => {

       this.presentAlert();
      
       });
      
     
    
  }

 async delete(id: any){

    const alert = await this.alertController.create({
      header: 'Seguro quieres eliminarlo!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';

            
    return this.http.delete<Pelicula>(this.urlP+'/'+id,   {
      headers : this.header
  })
      .pipe(

        map((res: any) => {

          this.allPelicula();


         

        })
      ).subscribe(res => {

         this.delet();
      

      });
          },
        },
      ],
    });

    await alert.present();



  }
}
