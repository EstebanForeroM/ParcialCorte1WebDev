import { productsHashMap } from "../frameworks/productData.js";
class ShoppingCart {
    constructor() {
        this.products = {};
        this.onProductAdded = (productName) => { };
        this.onProductRemoved = (productName) => { };
        this.onProductQuantityChanged = (productName, quantity) => { };
    }
    setOnProductAdded(onProductAdded) {
        this.onProductAdded = onProductAdded;
    }
    setOnProductRemoved(onProductRemoved) {
        this.onProductRemoved = onProductRemoved;
    }
    setOnProductQuantityChanged(onProductQuantityChanged) {
        this.onProductQuantityChanged = onProductQuantityChanged;
    }
    addProduct(productName) {
        if (this.products[productName] > 0) {
            this.products[productName] += 1;
            this.onProductQuantityChanged(productName, this.products[productName]);
        }
        else {
            this.products[productName] = 1;
            this.onProductAdded(productName);
        }
    }
    removeProduct(productName) {
        if (this.products[productName] > 1) {
            this.products[productName] -= 1;
            this.onProductQuantityChanged(productName, this.products[productName]);
        }
        else {
            delete this.products[productName];
            this.onProductRemoved(productName);
        }
    }
    get Products() {
        return this.products;
    }
    get ProductsPrice() {
        let price = 0;
        for (const productName in this.products) {
            const quantity = this.products[productName];
            const product = productsHashMap.get(productName);
            price += product.Price * quantity;
        }
        return price;
    }
}
export { ShoppingCart };
