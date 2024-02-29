# Конфигурация плагина

В данный момент плагин реализован в виде обычного объекта в файле vite.config.js.

Реализуем данный плагин в отдельном файл с помощью функции-фабрики.

Перенесем код плагина в файл vite-plugin-csv.js.

```js
// vite-plugin-csv.js

import { parse } from "csv-parse/sync";

export default () => ({
	name: "csv",
	// функция-хук, которая будет выполняться при каждом импорте модулей
	// в javascript-файлах
	// src - содержимое модуля
	// id - путь до модуля
	transform(src, id) {
		if (/\.csv$/.test(id)) {
			const records = parse(src, { columns: true });

			return {
				code: `export default ${JSON.stringify(records)}`,
			};
		}
	},
});
```

A vite.config.js импортируем ее.

```js
// vite.config.js
import Csv from "./vite-plugin-csv";

export default {
	plugins: [Csv()],
};
```

## Опции / хуки

-   apply - указывает в какой среде нужно использовать данный плагин (serve или build)
-   configResolved - позволяет присвоить конфиг внешней переменной
-   transformIndexHtml - позволяет трансформировать html файл

```js
// vite-plugin-csv.js
import { parse } from "csv-parse/sync";

export default () => {
	let config = null;

	return {
		name: "csv",

		//apply: 'serve',
		//apply: 'build',
		apply: (config, { command, mode }) => {
			console.log(command, mode); // serve development

			return mode === "development";
		},

		configResolved(resolvedConfig) {
			config = resolvedConfig;
		},

		// функция-хук, которая будет выполняться при каждом импорте модулей
		// в javascript-файлах
		// src - содержимое модуля
		// id - путь до модуля
		transform(src, id) {
			const showColumns = config.command === "serve";

			if (/\.csv$/.test(id)) {
				const records = parse(src, { columns: showColumns });

				return {
					code: `export default ${JSON.stringify(records)}`,
				};
			}
		},
		transformIndexHtml(html) {
			return html.replace(
				/<\/body>/,
				`<script>console.log("from transformIndexHtml");</script></body>`
			);
		},
	};
};
```
