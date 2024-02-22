import { cart } from "./cartData.js";

let buttonShoppingCart = document.getElementById('shopping-cart-button') ;
let shoppingCartUI = document.getElementsByClassName('shop-container');
let isVisible = false;

if (buttonShoppingCart) {
    buttonShoppingCart.addEventListener('click', changeUIcartState);
}
function changeUIcartState(event: Event) {
    if(isVisible){
        shoppingCartUI[0].classList.add('shop-container-hidden');
        isVisible = false;
    } else{
        shoppingCartUI[0].classList.remove('shop-container-hidden');
        isVisible = true;
    }
}
