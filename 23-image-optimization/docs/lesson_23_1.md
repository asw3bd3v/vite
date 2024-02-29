# Оптимизация картинок

## Установка vite

```
npm create vite@latest
npm create vite@^4
```

Для импорта обычного изображения можно выполнить следующий код.

```js
// main.js
import image from "./image.jpg";

document.querySelector("img").src = image;
```

Устанавливаем плагин для оптимизации картинок.

```
npm install vite-plugin-image-optimizer --save-dev
```

Также к нему нужно установить еще две библиотеки:

```
npm install sharp --save-dev
npm install svgo --save-dev
```

Вносим изменения в vite.config.js.

```js
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";

export default defineConfig(() => {
	return {
		plugins: [
			ViteImageOptimizer({
				jpg: {
					quality: 40,
				},
			}),
		],
	};
});
```

Данный плагин оптимизирует картинки при сборке проекта, поэтому выполняем команду:

```
npm run build
```