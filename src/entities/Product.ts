import { categories } from "./Categories";

class Product{

    private imageRoot : string;
    private name : string;
    private description : string;
    private category : categories;
    private price: number;

    constructor(imageRoot : string, name : string, description : string, category : categories, price : number){
        this.imageRoot = imageRoot;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
    }

    get ImageRoot(): string
    {
        return this.imageRoot;
    }
    
    get Price(): number
    {
        return this.price;
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