import { cart } from "./cartData";
const url = 'www.example.com/api';
const formData = new URLSearchParams();
Object.keys(cart).forEach((key, value) => formData.append(key, value.toString()));
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
})
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
