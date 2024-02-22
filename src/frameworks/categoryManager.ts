import { categories } from "src/entities/Categories"
import { Product } from "src/entities/Product"

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

//Golden Velvet Cheesecake

let productsList = [
    new Product("img/img-food/Sapphire-Seafood-Symphony.webp", "Sapphire Seafood Symphony", "this dish features a colorful assortment of seafood, including blue-tinted scallops, enhanced with a twist of lemon and a garnish of fresh herbs", categories.ENTRADAS, 35.99),
    new Product("img/img-food/dessert1.webp", "Lemon CheeseCake","Discover our Lemon Cheesecake with Fresh Berries: A zesty lemon cheesecake delight, perfectly complemented by a medley of fresh strawberries, blueberries, and raspberries.",categories.ENTRADAS,10.99),
    new Product("img/img-food/GoldenVelvetCheesecake.webp", "Golden Velvet Cheesecake", "A rich, creamy cheesecake with a golden hue, topped with a medley of fresh berries and a drizzle of raspberry coulis.", categories.POSTRES, 25.99),
    new Product("img/img-food/MidnightChocolateMilk.webp", "Midnight Chocolate Milk", "A rich, creamy chocolate milkshake, topped with a dollop of whipped cream and a sprinkle of cocoa powder.", categories.BEBIDAS,5.99),
]

console.log("productos creados")
productsList.forEach(product => {
    if (categorieshtmlElements[product.Category]){
        categorieshtmlElements[product.Category]!.innerHTML += `
        <article class="food-card">
            <img src="${product.ImageRoot}" alt="">
            <div class="card-text-container">
                <h2>${product.Name}</h2>
                <p>${product.Description}</p>
                <div class="button-card-box">
                    <p>${product.Price}</p>
                    <button> + </button>
                    <p>0</p>
                    <button> - </button>
                </div>
            </div>
        </article>
        `;
        console.log("carta creada")
    }
})