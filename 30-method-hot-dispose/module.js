import './submodule';

export const message = 'message from module.js';

export default 'default message from module.js';

console.log('log from module.js');

let styles;

function addStylesheet() {
    styles = document.createElement('style');

    styles.innerHTML = 'body {background: indigo; color: white;}';

    document.head.appendChild(styles);
}

function removeStylesheet() {
    styles.remove();
}

addStylesheet();

// Если бы мы не использовали вызов метода accept, то при обновлении данного файла
//  произошла бы полная перезагрузка страницы.
if (import.meta.hot) {
    import.meta.hot.accept((updatedModule) => {
        // если будет синтаксическая ошибка, то в updatedModule
        // придет undefined
        if (updatedModule) {
            console.log(updatedModule);
        }
    });

    import.meta.hot.accept(['./submodule'], ([newSubmodule]) => {
        // если в submodule.js будет синтаксическая ошибка, то в newSubmodule
        // придет undefined
        if (newSubmodule) {
            console.log(newSubmodule);
        }
    });

    import.meta.hot.dispose(() => {
        removeStylesheet();
    });

    // добавляем события для hot
    import.meta.hot.on('vite:beforeUpdate', (data) => {
        console.log('before update', data);
    });

    import.meta.hot.on('vite:afterUpdate', (data) => {
        console.log('after update', data);
    });

    import.meta.hot.on('vite:error', (data) => {
        console.log('error', data);
    });
}