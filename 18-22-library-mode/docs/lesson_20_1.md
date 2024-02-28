# Импорт модулей библиотеки с помощью require

Запустим app/main.js в среде node.

```js
// main.js
import { pluck } from "pluck";
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

log(pluck(users, "name"));
```

```
node main.js
```

Результат будет аналогичен выводу в консоль в браузере.

Теперь вместо import будем использовать require.

```js
// main.cjs
const { pluck } = require('pluck');
const { log } = require('pluck/log');

const users = [
  {
    name: 'John',
    age: 26
  },
  {
    name: 'Jane',
    age: 32
  },
  {
    name: 'Johnny',
    age: 2
  },
];

log(pluck(users, 'name'));
```

```
node main.сjs
```

В этом случае скрипт main.cjs также выполнится.