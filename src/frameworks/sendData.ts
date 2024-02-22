import { cart } from "./cartData.js";

const baseUrl = 'https://ejemplo.com/api/';
const queryParams = { numero: 2, nombre: 'juan' };

// Construir la cadena de consulta
const queryString = Object.keys(queryParams)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
  .join('&');

// Combinar la URL base con la cadena de consulta
const url = `${baseUrl}?${queryString}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta recibida:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });