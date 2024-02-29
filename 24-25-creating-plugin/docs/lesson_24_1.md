# Создание плагина

Напишем плагин для распознавания csv. Чтобы vite мог читать csv-файлы и преобразовывать из в массивы.

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

## Установка библиотеки csv-parse

```
npm install csv-parse
```

Добавляем в корень проекта csv-файл products.csv.

Изначально vite не поддерживает импорт csv-модулей, поэтому напишем плагин, который позволит импортировать csv-файлы и преобразовывать содержимое данных файлов в валидные javascript массивы.

```js
// vite.config.js
import { parse } from "csv-parse/sync";
import Inspect from "vite-plugin-inspect";

export default {
	plugins: [
		Inspect(),
		{
			name: 'vite:csv',
			// функция-хук, которая будет выполняться при каждом импорте модулей
			// в javascript-файлах
			// src - содержимое модуля
			// id - путь до модуля
			async transform(src, id) {
				if (/\.csv$/.test(id)) {
					const records = parse(src, { columns: true });

					return {
						code: `export default ${JSON.stringify(records)}`,
					}
				}
			}
		}
	],
};
```

```js
// main.js
import products from './products.csv';

console.log(products); // массив

document.querySelector('pre').textContent = JSON.stringify(products);
```