# Glob импорты

Импортируем все javascript-файлы из папки src/10/

```js
// main.js

const modules = import.meta.glob("./src/10/*.js");

// выполняем модули
Object.values(modules).forEach((module) => {
    module()
        // в data будет содержаться то, что мы экспортируем из модуля
        .then((data) => {
            console.log(data);
        })
});

// для откючения динамического поведения функции glob
// можно использовать второй параметр
const modules = import.meta.glob('./src/10/*.js', { eager: true });
```
