import { cart } from "./cartData.js";
let idCounter = 0;
function getButtonId() {
    idCounter++;
    return "btn-operation-" + idCounter;
}
function setButtonEventListener(buttonId, productName, action) {
    let button = document.getElementById(buttonId);
    if (button) {
        button.onclick = (e) => {
            if (e.target) {
                if (action === "+") {
                    addProductToCart(productName);
                }
                else {
                    removeProductFromCart(productName);
                }
            }
        };
    }
}
function addProductToCart(productName) {
    console.log('Adding product to cart, product name: ', cart);
    cart.addProduct(productName);
    console.log("cart price: ", cart.ProductsPrice);
}
function removeProductFromCart(productName) {
    console.log('Removing product from cart: ', cart);
    cart.removeProduct(productName);
}
export { addProductToCart, removeProductFromCart, getButtonId, setButtonEventListener };
