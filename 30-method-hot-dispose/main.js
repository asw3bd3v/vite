//import products from './products.csv';
import './module';

/* console.log(products);

document.querySelector('pre').textContent = JSON.stringify(products); */

if (import.meta.hot) { // данный код выполняется только в режиме разработки
    /* import.meta.hot.on('csv-update', ({ data, url }) => {
        console.log(`[vite] hot updated: ${url}`);
        document.querySelector('pre').textContent = JSON.stringify(data);
    });

    // принимаем сообщение от сервера
    import.meta.hot.on('connected', (message) => {
        console.log(message);

        // отправляем сообщение серверу
        import.meta.hot.send('ping', 'Hello server!');
    });

    import.meta.hot.on('pong', (message) => {
        console.log(message);
    }); */



}