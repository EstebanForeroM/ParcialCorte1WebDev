import { categories } from "../entities/Categories";
let categorieshtmlElements = {
    [categories.ENTRADAS]: document.getElementById('container-entradas'),
    [categories.PLATOSPRINCIPALES]: document.getElementById('container-platos-principales'),
    [categories.POSTRES]: document.getElementById("container-postres"),
    [categories.BEBIDAS]: document.getElementById("container-bebidas")
};
let productsList = [];
