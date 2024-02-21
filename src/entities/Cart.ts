import { Product } from "./Product";

class ShoppingCart{

    private products : Product[];
    
    constructor(products : Product[]) {
        this.products = products;
    }

    addProduct(product : Product) {
        this.products.push(product);
    }
    
    removeProduct(productName : string) {
        this.products = this.products.filter(p => p.Name !== productName);

    }

    get getProducts() : Product[] {
        return this.products;
    }
}