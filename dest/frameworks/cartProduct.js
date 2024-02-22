class CartProductHTML {
    constructor(product) {
        this.product = product;
        this.productName = product.Name;
        this.quantityElement = document.createElement('p');
        this.HTMLElement = this.createHTMLElement();
    }
    get ProductName() {
        return this.productName;
    }
    createHTMLElement() {
        const article = document.createElement('article');
        article.className = 'cart-shopping-item';
        const img = document.createElement('img');
        img.src = `${this.product.ImageRoot}/${this.product.Name.replace(/\s+/g, '')}.webp`;
        img.alt = this.product.Description;
        article.appendChild(img);
        const name = document.createElement('h1');
        name.textContent = this.product.Name;
        article.appendChild(name);
        const div = document.createElement('div');
        const plusBtn = document.createElement('button');
        plusBtn.id = 'plus';
        plusBtn.textContent = '+';
        plusBtn.addEventListener('click', () => this.changeQuantity(1));
        div.appendChild(plusBtn);
        this.quantityElement = document.createElement('p');
        this.quantityElement.textContent = '1';
        div.appendChild(this.quantityElement);
        const minusBtn = document.createElement('button');
        minusBtn.id = 'minus';
        minusBtn.textContent = '-';
        minusBtn.addEventListener('click', () => this.changeQuantity(-1));
        div.appendChild(minusBtn);
        const price = document.createElement('p');
        price.textContent = `$${this.product.Price.toFixed(2)}`;
        div.appendChild(price);
        article.appendChild(div);
        return article;
    }
    changeQuantity(change) {
        if (change === 0)
            this.deleteProduct();
        const currentQuantity = parseInt(this.quantityElement.textContent || '1');
        const newQuantity = currentQuantity + change;
        this.quantityElement.textContent = newQuantity.toString();
    }
    deleteProduct() {
        this.HTMLElement.remove();
    }
    appendTo(parent) {
        parent.appendChild(this.HTMLElement);
    }
}
export {};
