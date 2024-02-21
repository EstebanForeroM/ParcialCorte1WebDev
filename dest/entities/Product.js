class Product {
    constructor(imageRoot, name, description) {
        this.imageRoot = imageRoot;
        this.name = name;
        this.description = description;
    }
    get ImageRoot() {
        return this.imageRoot;
    }
    get Name() {
        return this.name;
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
