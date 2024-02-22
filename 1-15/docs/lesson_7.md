# Импорт JSON файлов

Vite позволяет импортировать json файлы.

```json
{
    "name": "John",
    "age": 40
}
```

```js
// main.js
import data from './src/assets/07.json';
import { name, age } from './src/assets/07.json';

console.log(data); // {name: 'John', age: 40}
console.log(name, age) // John 40
```