import './submodule';

export const message = 'message from module.js';

export default 'default message from module.js';

console.log('log from module.js');

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
}