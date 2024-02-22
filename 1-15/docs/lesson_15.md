# Псевдонимы путей

Чтобы импортировать файлы в main.js нужно прописать полный путь к ним:

```js
// main.js
import "./src/assets/03.css";
import imageUrl from "./src/assets/img/javascript.svg";

document.querySelector("#image").src = imageUrl;
```

Чтобы сократить пути воспользуемся настройкой vite.

```js
// vite.config.js
import path from "path";

export default {
	// ...
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src/assets"),
		},
	},
};
```

Теперь в main.js можно использовать псевдонимы при импорте.

```js
import "@/03.css";
import imageUrl from "@/img/javascript.svg";

document.querySelector("#image").src = imageUrl;
```
