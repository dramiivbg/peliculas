export class Categoria {

    categoryId: String;
    name: String


    set(data: Categoria){

        this.categoryId = data.categoryId ;
        this.name = data.name;
    }
}
