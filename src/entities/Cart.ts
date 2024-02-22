import { Product } from "./Product";


class ShoppingCart{
    private products : {[productName: string] : number};
    constructor() {
        this.products = {};
    }

    addProduct(productName : string) {
        this.products[productName] = this.products[productName] + 1 || 1;
    }
    
    removeProduct(productName : string) {
        if (this.products[productName] > 1) {
            this.products[productName] -= 1;
        } else {
            delete this.products[productName];
        }
    }

    get getProducts() : {[productName: string] : number} {
        return this.products;
    }
}

export { ShoppingCart };