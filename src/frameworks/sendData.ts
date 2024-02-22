import { cart } from "./cartData.js";

interface ShoppingCart {
  [key: string]: number | string;
}

let url = 'http://www.example.com/api';

const params = new URLSearchParams();

// Ensure cart is treated as ShoppingCart to satisfy TypeScript's type system
Object.keys(cart as ShoppingCart).forEach((key) => {
  const value = cart[key];
  if (typeof value === 'number' || typeof value === 'string') {
    params.append(key, value.toString());
  }
});

// Append params to URL
url += '?' + params.toString();

fetch(url, {
  method: 'GET',
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
