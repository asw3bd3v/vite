# Метод hot.accept()

Копируем данные из папки 28-client-server-interaction.

Рассмотрим, как можно реализовать горячую замену модулей только для javascript-файлов.

Создаем javascript модуль module.js.

```js
// module.js
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
}
```
