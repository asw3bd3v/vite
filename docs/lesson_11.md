# Именованные glob импорты

```js
// опция as позволяет получить содержимое модуля в виде строки
// опция url позволяет получить вместо содержимого модуля путь к файлу
const modules = import.meta.glob('./src/10/*.js', {
    //as: 'raw', // получим строковое предстваление каждого модуля
    as: 'url', // получим путь до модуля
    eager: true 
});


// можно указать какие данные мы хотим получить
const modules = import.meta.glob('./src/10/*.js', {
    import: 'name',
    //import: 'default',
});

// в этом случае объект modules будет содержать экспорт из модулей
console.log(modules);

document.addEventListener('click', () => {
    Object.values(modules).forEach((module) => {
        module()
            .then((data) => {
                // будет выведено значение экспортируемой константы name
                // если такой константы нет, то будет выведен undefined
                console.log(data);
            })
    });
});

// в этом случае мы получим экспорт сразу
const modules = import.meta.glob('./src/10/*.js', {
    import: 'name',
    eager: true,
});
```