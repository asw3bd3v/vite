# Сторонние зависимости в собственных библиотеках

Рассмотрим случай создания библиотеки, которая будет импортировать стороннюю библиотеку.

Предварительно устанавливаем библиотеку collect.js:

```
npm install collect.js
```

```js
// lib/index.js

import collect from 'collect.js';

export function pluckAndLog(items, field) {
    const plucked = collect(items).pluck(field);

    console.log(plucked);

    return plucked;
}
```

Выполняем команду сборки:

```
npm run build
```

Собранные файлы будут содержать библиотеку collect.js.

Теперь запускаем app изменив импорт в main.js.

```js
// main.js
import { pluckAndLog } from "pluck";

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

pluckAndLog(users, 'name');
```