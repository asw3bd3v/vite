# Переменные окружения

## Установка vite

```
npm create vite@latest
npm create vite@^4
```

## Установка плагина vite-plugin-inspect

```
npm i -D vite-plugin-inspect
```

Создаем в корне проекта файл vite.config.js, куда помещаем следующий код:

```js
import Inspect from "vite-plugin-inspect";

export default {
	plugins: [Inspect()],
};
```