class ShoppingCart {
    constructor() {
        this.products = {};
    }
    addProduct(productName) {
        this.products[productName] = this.products[productName] + 1 || 1;
    }
    removeProduct(productName) {
        if (this.products[productName] > 1) {
            this.products[productName] -= 1;
        }
        else {
            delete this.products[productName];
        }
    }
    get getProducts() {
        return this.products;
    }
}
export { ShoppingCart };
