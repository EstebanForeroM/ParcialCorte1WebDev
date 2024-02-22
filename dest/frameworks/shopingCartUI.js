import { cart } from "./cartData.js";
import { CartProductHTML } from "./cartProduct.js";
import { productsHashMap } from "./productData.js";
let buttonShoppingCart = document.getElementById('shopping-cart-button');
let shoppingCartUI = document.getElementsByClassName('shop-container');
let shoppingCartItemsContainer = document.getElementById('carts-elements-container');
let totalPriceHTML = document.getElementById('total-price');
let isVisible = false;
let shoppingCartProducts = {};
if (buttonShoppingCart) {
    buttonShoppingCart.addEventListener('click', changeUIcartState);
}
function changeUIcartState(event) {
    if (isVisible) {
        shoppingCartUI[0].classList.add('shop-container-hidden');
        isVisible = false;
    }
    else {
        shoppingCartUI[0].classList.remove('shop-container-hidden');
        isVisible = true;
    }
}
cart.setOnProductAdded((productName) => {
    let cartProductHTML = new CartProductHTML(productsHashMap.get(productName));
    shoppingCartProducts[productName] = cartProductHTML;
    cartProductHTML.appendTo(shoppingCartItemsContainer);
    updateTotalPrice();
});
cart.setOnProductQuantityChanged((productName, quantity) => {
    shoppingCartProducts[productName].changeQuantity(quantity);
    updateTotalPrice();
});
cart.setOnProductRemoved((productName) => {
    shoppingCartProducts[productName].deleteProduct();
    delete shoppingCartProducts[productName];
    updateTotalPrice();
});
function updateTotalPrice() {
    let totalPrice = cart.ProductsPrice;
    totalPriceHTML.textContent = `Total: $${totalPrice.toPrecision(3)}`;
}
