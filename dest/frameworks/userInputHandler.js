import { cart } from "./cartData.js";
let idCounter = 0;
let mappingIdToProduct = {};
function getButtonId() {
    idCounter++;
    return "btn-operation-" + idCounter;
}
function setButtonEventListener(buttonId, productName, action) {
    let button = document.getElementById(buttonId);
    mappingIdToProduct[buttonId] = [productName, action];
    if (button) {
        console.log('button ' + button + ' id: ' + buttonId + ' productName: ' + productName + ' action: ' + action);
        button.addEventListener('click', (e) => {
            if (e.target) {
                const target = e.target;
                const id = target.id;
                const [productName, action] = mappingIdToProduct[id];
                if (action === "+") {
                    addProductToCart(productName);
                }
                else {
                    removeProductFromCart(productName);
                }
            }
        });
    }
}
function addProductToCart(productName) {
    console.log('Adding product to cart, product name: ', productName);
    cart.addProduct(productName);
}
function removeProductFromCart(productName) {
    console.log('Removing product from cart: ' + productName);
    cart.removeProduct(productName);
}
export { addProductToCart, removeProductFromCart, getButtonId, setButtonEventListener };
