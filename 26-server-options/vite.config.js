export default {
    server: {
        port: '3333',

        // в этом случае не получится запустить сервер повторно
        // strictPort: true,

        // указываем заголовки ответа для всех запросов
        headers: {
            a: 'b',
        },

        // прокси
        proxy: {
            // при запросе по адресу localhost:3333/products мы обратимся 
            // к https://dummyjson.com/products

            // '/products': 'https://dummyjson.com'

            // или можно задать в виде объекта
            // /api/products -> https://dummyjson.com/products
            // /api/posts -> https://dummyjson.com/posts
            '/api': {
                target: 'https://dummyjson.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        },
    },
    preview: {
        port: '4444',

        // указываем адрес который будет открыт после запуска preview-сервера
        open: '/api/products',

        // прокси
        proxy: {
            '/api': {
                target: 'https://dummyjson.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        },
    }
};