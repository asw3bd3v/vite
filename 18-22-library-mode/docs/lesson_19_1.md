# Сборка библиотек с несколькими точками входа

```js
// app/main.js
import { pluck } from "pluck";
import { log } from "pluck/log";
```

Для этого в lib в папке src создадим log.js.

```js
export function log(data) {
	console.log(data);
}
```

Чтобы сообщить vite, что в нашей библиотеке присутствует несколько точек входа необходимо модифицировать значение под ключом entry в vite.config.js.

```js
export default {
	plugins: [Inspect()],
	build: {
		lib: {
			entry: [
				resolve(__dirname, "src/index.js"),
				resolve(__dirname, "src/log.js"),
			],
			name: "Pluck", // название библиотеки
			fileName: (format, name) => {
				if (format === "es") {
					return `${name}.js`;
				}

				return `${name}.${format}`;
			},
		},
	},
};
```

После этого выполняем в lib команду

```
npm run build
```

Также необходимо модифицировать файл package.json.

```json
{
	"main": "./dist/index.cjs",
	"module": "./dist/index.js",
	"exports": {
		".": {
			"import": "./dist/index.js",
			"require": "./dist/index.cjs"
		},
		"./log": {
			"import": "./dist/log.js",
			"require": "./dist/log.cjs"
		}
	}
}
```

В папке lib выполняем команду

```
npm link
```

чтобы сделать доступной глобально библиотеку.

А в папке app запускаем команду

```
npm link pluck
```

Теперь функция log доступна в проекте приложения:

```js
// main.js
import { log } from "pluck/log";

const users = [
	{
		name: "John",
		age: 26,
	},
	{
		name: "Jane",
		age: 32,
	},
	{
		name: "Johnny",
		age: 2,
	},
];

log(users);
```
