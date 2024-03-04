import products from './products.csv';

console.log(products);

document.querySelector('pre').textContent = JSON.stringify(products);