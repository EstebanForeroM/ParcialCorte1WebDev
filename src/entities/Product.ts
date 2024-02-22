import { categories } from "./Categories";

class Product{

    private imageRoot : string;
    private name : string;
    private description : string;
    private category : categories;

    constructor(imageRoot : string, name : string, description : string, category : categories){
        this.imageRoot = imageRoot;
        this.name = name;
        this.description = description;
        this.category = category;
    }

    get ImageRoot(): string
    {
        return this.imageRoot;
    }

    get Name() : string {
        return this.name;
    }

    get Category() : string {
        return this.category;
    }

    get Description() : string {
       return this.description;
    }

    set ImageRoot(imageRoot : string){
        this.imageRoot = imageRoot;
    }

    set SetName(name : string){
        this.name = name;
    }

    set Sdescription(description: string){
        this.description = description;
    }
}

export { Product };