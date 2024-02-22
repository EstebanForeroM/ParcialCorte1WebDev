import { Product } from "../entities/Product.js";
import { categories } from "../entities/Categories.js";
let productsList = [
    new Product("img/img-food/Sapphire-Seafood-Symphony.webp", "Sapphire Seafood Symphony", "this dish features a colorful assortment of seafood, including blue-tinted scallops, enhanced with a twist of lemon and a garnish of fresh herbs", categories.ENTRADAS, 35.99),
    new Product("img/img-food/dessert1.webp", "Lemon CheeseCake", "Discover our Lemon Cheesecake with Fresh Berries: A zesty lemon cheesecake delight, perfectly complemented by a medley of fresh strawberries, blueberries, and raspberries.", categories.POSTRES, 10.99),
    new Product("img/img-food/GoldenVelvetCheesecake.webp", "Golden Velvet Cheesecake", "A rich, creamy cheesecake with a golden hue, topped with a medley of fresh berries and a drizzle of raspberry coulis.", categories.POSTRES, 25.99),
    new Product("img/img-food/MidnightChocolateMilk.webp", "Midnight Chocolate Milk", "A rich, creamy chocolate milkshake, topped with a dollop of whipped cream and a sprinkle of cocoa powder.", categories.BEBIDAS, 5.99),
    new Product("img/img-food/PadThai.webp", "Pad Thai", "A classic Thai dish featuring stir-fried rice noodles, shrimp, and a medley of fresh vegetables, garnished with peanuts and a twist of lime.", categories.PLATOSPRINCIPALES, 15.99),
    new Product("img/img-food/BeefWellington.webp", "Beef Wellington", "A classic British dish featuring a tender fillet of beef, topped with a savory mushroom duxelles and wrapped in a flaky puff pastry.", categories.PLATOSPRINCIPALES, 45.99),
    new Product("img/img-food/MargheritaPizza.webp", "Margherita Pizza", "A classic Italian pizza featuring a thin, crispy crust, topped with a rich tomato sauce, fresh mozzarella, and a garnish of fresh basil.", categories.PLATOSPRINCIPALES, 20.99),
    new Product("img/img-food/LobsterThermidor.webp", "Lobster Thermidor", "A classic French dish featuring tender lobster meat, smothered in a rich, creamy sauce, and topped with a golden-brown crust of cheese and breadcrumbs.", categories.PLATOSPRINCIPALES, 55.99),
    new Product("img/img-food/CaesarSalad.webp", "Caesar Salad", "A classic Caesar salad featuring crisp romaine lettuce, garlic croutons, and a creamy Caesar dressing, topped with a sprinkle of parmesan cheese.", categories.ENTRADAS, 12.99),
    new Product("img/img-food/SushiNigiri.webp", "Sushi Nigiri", "A classic Japanese dish featuring a selection of fresh, raw fish, served atop a small mound of seasoned rice.", categories.PLATOSPRINCIPALES, 30.99),
    new Product("img/img-food/wine.jpeg", "Wine", "A classic French wine, with a rich, full-bodied flavor and a deep, ruby-red hue.", categories.BEBIDAS, 40.99),
    new Product("img/img-food/SpaghettiCarbonara.webp", "Spaghetti Carbonara", "A classic Italian dish featuring spaghetti, tossed with a rich, creamy sauce of eggs, cheese, pancetta, and black pepper.", categories.PLATOSPRINCIPALES, 18.99),
    new Product("img/img-food/redfruits.webp", "Red fruits juice", "A refreshing juice made with a blend of fresh, ripe strawberries, raspberries, and blueberries.", categories.BEBIDAS, 8.99),
    new Product("img/img-food/greenjuice.webp", "Green juice", "A refreshing juice made with a blend of fresh, ripe kiwi, apple, and spinach.", categories.BEBIDAS, 8.99),
    new Product("img/img-food/lemonwater.webp", "Lemon water", "A refreshing drink made with fresh, ripe lemons and a hint of mint.", categories.BEBIDAS, 5.99),
    new Product("img/img-food/chocolatecake.jpeg", "Chocolate cake", "A rich, moist chocolate cake, topped with a smooth, creamy chocolate frosting.", categories.POSTRES, 20.99),
    new Product("img/img-food/strawberriescupcake.jpeg", "Strawberries cupcake", "A light, fluffy cupcake, topped with a swirl of sweet, creamy frosting and a fresh, ripe strawberry.", categories.POSTRES, 10.99),
    new Product("img/img-food/lemonpie.jpeg", "Lemon pie", "A zesty lemon pie, with a flaky, golden-brown crust and a smooth, tangy lemon filling.", categories.POSTRES, 15.99),
    new Product("img/img-food/mushroomssoup.jpeg", "Mushrooms soup", "A rich, creamy soup, made with a blend of fresh, wild mushrooms and a hint of garlic.", categories.ENTRADAS, 12.99),
    new Product("img/img-food/fruitSalad.jpeg", "Fruit salad", "A refreshing salad made with a blend of fresh, ripe fruits, including strawberries, blueberries, and kiwi.", categories.ENTRADAS, 10.99),
];
let productsHashMap = new Map();
productsList.forEach(product => {
    productsHashMap.set(product.Name, product);
});
export { productsList, productsHashMap };
