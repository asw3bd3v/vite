# Режим сборки библиотеки

Создадим функцию plug в проекте lib.

```js
// src/index.js
export function pluck(collection, field) {
	return collection.map((item) => item[field]);
}
```

Чтобы vite мог собрать данный проект в виде npm-пакета необходимо указать соответствующую конфигурацию в vite.config.js.

```js
import { resolve } from "path";

export default {
	build: {
		lib: {
			entry: resolve(__dirname, "lib/index.js"),
			name: "Pluck", // название библиотеки
			fileName: "pluck", // название файла после сборки
		},
	},
};
```

Для сборки библиотеки выполняем команду:

```
npm run build
```

После этого будут сгенерированы два файла:

-   pluck.js - использует синтаксис esm-модулей, т.е. стандартных модулей ecmascript
-   pluck.umd.cjs - совместима с commonJs модулями (через require, вместо import/export)

Далее необходимо модифицировать package.json. Добавляем ключ main в котором указываем путь к файлу который по умолчанию должен быть импортирован в случае если мы будем подключать библиотеку, используя функцию require, а в ключе module указываем путь к тому файлу, который должен быть импортирован при использовании стандартного синтаксиса импортов.
В ключе exports указываем файлы, которые могут быть импортированы.

```json
{
	"name": "pluck",

	"main": "./dist/pluck.umd.cjs",
	"module": "./dist/pluck.js",
	"exports": {
		".": {
			"import": "./dist/pluck.js",
			"require": "./dist/pluck.umd.cjs"
		}
	}
}
```
