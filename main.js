//const modules = import.meta.glob('./src/10/*.js');

// console.log(modules);

// загружаем модули по щелчку на document
/* document.addEventListener('click', () => {
    Object.values(modules).forEach((module) => {
        module()
            .then((data) => {
                console.log(data);
            })
    });
}); */

// для откючения динамического поведения функции glob
// можно использовать второй параметр
const modules = import.meta.glob('./src/10/*.js', { eager: true });

// в этом случае объект modules будет содержать экспорт из модулей
console.log(modules);