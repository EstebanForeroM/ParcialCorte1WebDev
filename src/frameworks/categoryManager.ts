import { categories } from "../entities/Categories.js";
import { Product } from "../entities/Product.js";
import { productsList } from "./productData.js";
import { getButtonId, setButtonEventListener } from "./userInputHandler.js";

console.log("This is the file categoryManager.ts");

type categorieshtmlElements = {
    [key : string] : HTMLElement | null;
}

const categorieshtmlElements: {[key:string] : HTMLElement | null} = {
    [categories.ENTRADAS] : document.getElementById('container-entradas'),
    [categories.PLATOSPRINCIPALES] : document.getElementById('container-platos-principales'),
    [categories.POSTRES] : document.getElementById ("container-postres"),
    [categories.BEBIDAS] : document.getElementById("container-bebidas")
};

console.log("productos creados")

let callStack: {id1: string, productName: string, operation: string}[] = [];

productsList.forEach(product => {
    let addButtonId = getButtonId();
    let removeButtonId = getButtonId();

    if (categorieshtmlElements[product.Category]){
        categorieshtmlElements[product.Category]!.innerHTML += `
        <article class="food-card">
            <img src="${product.ImageRoot}" alt="">
            <div class="card-text-container">
                <h2>${product.Name}</h2>
                <p>${product.Description}</p>
                <div class="button-card-box">
                    <p>${product.Price}</p>
                    <button id = '${addButtonId}'> + </button>
                    <p>0</p>
                    <button id= '${removeButtonId}'> - </button>
                </div>
            </div>
        </article>
        `;
        console.log("carta creada")

        callStack.push({id1: addButtonId, productName: product.Name, operation: "+"});
        callStack.push({id1: removeButtonId, productName: product.Name, operation: "-"});
    }
})


callStack.forEach(call => {
    setButtonEventListener(call.id1, call.productName, call.operation);
})