class Product {
    constructor(imageRoot, name, description, category, price) {
        this.imageRoot = imageRoot;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
    }
    get ImageRoot() {
        return this.imageRoot;
    }
    get Price() {
        return this.price;
    }
    get Name() {
        return this.name;
    }
    get Category() {
        return this.category;
    }
    get Description() {
        return this.description;
    }
    set ImageRoot(imageRoot) {
        this.imageRoot = imageRoot;
    }
    set SetName(name) {
        this.name = name;
    }
    set Sdescription(description) {
        this.description = description;
    }
}
export { Product };
