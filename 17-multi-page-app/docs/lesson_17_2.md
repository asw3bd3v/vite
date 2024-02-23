# Сборки для многостраничных приложений

## Vite позволяет генерировать сразу несколько сборок для разных страниц.

Создаем две html-страницы - index.html и login.html.

Для того, чтобы страница login.html входила в результат итоговой сборки, нужно в vite.config.js добавить некоторые настройки.

```js
import { resolve } from "path";

export default {
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				login: resolve(__dirname, "login/index.html"),
			},
		},
	},
};
```

Теперь в javascript-файлах можно использовать все возможности vite.

```js
// main.js
import "./main.sass";
```
