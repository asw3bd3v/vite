# Папка public

В vite статические файлы можно условно разделить на две группы:

-   файлы, которые мы импортируем через import. Чаще всего они размещаются в папке src/assets.
-   файлы, которые мы не будем использовать явно в исходном коде приложения (т.е. мы не будем их импортировать в виде ecmascript-модулей). И вместо этого мы хотим, чтобы такие статические файлы были доступны для считывания в браузере, ссылаясь на них по их названию.

Для второй группы файлом необходимо использовать папку public. Все файлы из этой папки при сборке будут скопированы в корневую папку с собранным проектом без изменения.

В html на них можно ссылаться по их названию.

```html
<img src="vite.svg" />
```

При сборке

```
npm run build
```

мы получим папку dist:

```
dist
    assets
        index-53e7d8fb.js
        javascript-8dac5379.svg
    index.html
    vite.svg
```

Чтобы сменить название папки public:

```js
// vite.config.js
export default {
	// сменить название папки public
	publicDir: "build",
};
```

Для запуска статического сервера в папке с собранным проектом:

```
npm run preview
```