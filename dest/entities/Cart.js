class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(productName) {
        this.products = this.products.filter(p => p.Name !== productName);
    }
    get getProducts() {
        return this.products;
    }
}
export {};
