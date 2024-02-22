import { categories } from "../entities/Categories";
import { Product } from "../entities/Product";
let categorieshtmlElements = {
    [categories.ENTRADAS]: document.getElementById('container-entradas'),
    [categories.PLATOSPRINCIPALES]: document.getElementById('container-platos-principales'),
    [categories.POSTRES]: document.getElementById("container-postres"),
    [categories.BEBIDAS]: document.getElementById("container-bebidas")
};
//Sapphire Seafood Symphony
let productsList = [
    new Product("img/img-food/Sapphire-Seafood-Symphony.webp", "Sapphire Seafood Symphony", "this dish features a colorful assortment of seafood, including blue-tinted scallops, enhanced with a twist of lemon and a garnish of fresh herbs", categories.ENTRADAS),
    new Product()
];
new Product();
new Product();
new Product();
new Product();
new Product();
