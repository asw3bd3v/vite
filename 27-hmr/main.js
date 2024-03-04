import products from './products.csv';

console.log(products);

document.querySelector('pre').textContent = JSON.stringify(products);

if (import.meta.hot) {
    import.meta.hot.on('csv-update', ({ data, url }) => {
        console.log(`[vite] hot updated: ${url}`);
        document.querySelector('pre').textContent = JSON.stringify(data);
    });
}