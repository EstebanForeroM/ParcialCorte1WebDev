import { Product } from "../entities/Product.js";
import { addProductToCart, getButtonId, removeProductFromCart } from "./userInputHandler.js";

class CartProductHTML {
    private HTMLElement: HTMLElement;
    private quantityElement: HTMLElement;
    private product: Product;
    private productName: string;

    constructor(product: Product) {
        this.product = product;
        this.productName = product.Name;
        this.quantityElement = document.createElement('p');
        this.HTMLElement = this.createHTMLElement();
    }

    get ProductName(): string {
        return this.productName;
    }

    private createHTMLElement(): HTMLElement {

        const article = document.createElement('article');
        article.className = 'cart-shopping-item';


        const img = document.createElement('img');
        img.src = `${this.product.ImageRoot}`;
        img.alt = this.product.Description;
        article.appendChild(img);


        const name = document.createElement('h1');
        name.textContent = this.product.Name;
        article.appendChild(name);


        const div = document.createElement('div');


        const plusBtn = document.createElement('button');
        
        plusBtn.id = getButtonId();
        plusBtn.textContent = '+';
        plusBtn.addEventListener('click', () => addProductToCart(this.productName));
        div.appendChild(plusBtn);


        this.quantityElement = document.createElement('p');
        this.quantityElement.textContent = '1'; 
        div.appendChild(this.quantityElement);


        const minusBtn = document.createElement('button');
        minusBtn.id = getButtonId();
        minusBtn.textContent = '-';
        minusBtn.addEventListener('click', () => removeProductFromCart(this.productName));
        div.appendChild(minusBtn);


        const price = document.createElement('p');
        price.textContent = `$${this.product.Price}`;
        div.appendChild(price);

        article.appendChild(div);

        return article;
    }

    public changeQuantity(change: number): void {
        if (change === 0) this.deleteProduct();
        const currentQuantity = parseInt(this.quantityElement.textContent || '1');
        const newQuantity = currentQuantity + change; 
        this.quantityElement.textContent = newQuantity.toString();
    }

    public deleteProduct(): void {
        this.HTMLElement.remove();
    }

    public appendTo(parent: HTMLElement): void {
        parent.appendChild(this.HTMLElement);
    }
}

export { CartProductHTML };