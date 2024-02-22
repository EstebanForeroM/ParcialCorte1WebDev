class Product {
    constructor(imageRoot, name, description, category) {
        this.imageRoot = imageRoot;
        this.name = name;
        this.description = description;
        this.category = category;
    }
    get ImageRoot() {
        return this.imageRoot;
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
