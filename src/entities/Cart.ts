import { productsHashMap } from "../frameworks/productData.js";
import { Product } from "./Product.js";


class ShoppingCart{
    private products : {[productName: string] : number};

    private onProductAdded : (productName : string) => void;
    private onProductRemoved : (productName : string) => void;
    private onProductQuantityChanged : (productName : string, quantity : number) => void;

    constructor() {
        this.products = {};
        this.onProductAdded = (productName : string) => {};
        this.onProductRemoved = (productName : string) => {};
        this.onProductQuantityChanged = (productName : string, quantity : number) => {};
    }

    setOnProductAdded(onProductAdded : (productName : string) => void) {
        this.onProductAdded = onProductAdded;
    }

    setOnProductRemoved(onProductRemoved : (productName : string) => void) {
        this.onProductRemoved = onProductRemoved;
    }

    setOnProductQuantityChanged(onProductQuantityChanged : (productName : string, quantity : number) => void) {
        this.onProductQuantityChanged = onProductQuantityChanged;
    }

    addProduct(productName : string) {
        if (this.products[productName] > 0) {
            this.products[productName] += 1;
            this.onProductQuantityChanged(productName, 1);
        } else {
            this.products[productName] = 1;
            this.onProductAdded(productName);
        }
    }
    
    removeProduct(productName : string) {
        if (this.products[productName] > 1) {
            this.products[productName] -= 1;
            this.onProductQuantityChanged(productName, -1);
        } else {
            delete this.products[productName];
            this.onProductRemoved(productName); 
        }
    }

    get Products() : {[productName: string] : number} {
        return this.products;
    }

    get ProductsPrice() : number {
        let price = 0;
        for (const productName in this.products) {
            const quantity = this.products[productName];
            const product = productsHashMap.get(productName) as Product;
            price += product.Price * quantity;
        }
        return price;
    }
}

export { ShoppingCart };