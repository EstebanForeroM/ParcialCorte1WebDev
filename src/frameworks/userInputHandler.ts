import { cart } from "./cartData.js";

let idCounter: number = 0;

let mappingIdToProduct: {[id: string] : [string, string]} = {};

function getButtonId() : string {
    idCounter++;
    return "btn-operation-" + idCounter;
}

function setButtonEventListener(buttonId: string, productName: string, action : string) {
    let button = document.getElementById(buttonId);
    mappingIdToProduct[buttonId] = [productName, action]
    if (button) {
        console.log('button ' + button + ' id: ' + buttonId + ' productName: ' + productName + ' action: ' + action)
        button.onclick =(e) => {
            console.log("aaa");
            if (e.target) {
                let target = e.target as HTMLElement;
                let id = target.id;
                const [productName, action] = mappingIdToProduct[id];
                if(action === "+"){
                    addProductToCart(productName);
                } else {
                    removeProductFromCart(productName);
                }
            }
        }
    }
}

function addProductToCart(productName: string) {
    console.log('Adding product to cart, product name: ', productName);
    cart.addProduct(productName);
}

function removeProductFromCart(productName: string) {
    console.log('Removing product from cart: ' + productName);
    cart.removeProduct(productName);
}

export { addProductToCart, removeProductFromCart, getButtonId, setButtonEventListener };