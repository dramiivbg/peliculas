import { Categoria } from "./categoria";

export class Pelicula {

    movieId: String;
    name: String;
    category: Categoria;
    year: number;


    set(data: Pelicula){

        this.movieId = data.movieId;
        this.name = data.name;
        this.category = data.category;
        this.year = data.year;

    }
}
