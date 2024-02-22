# Импорт файлов

## Импорт изображения

```js
// main.js
import imageUrl from './src/assets/img/javascript.svg';

console.log(imageUrl); // /src/assets/img/javascript.svg

document.getElementById('image').src = imageUrl;
```

```html
<img id="image" />
```

## Импорт json-файла с query-параметром url

Если импортировать json-файл с query-параметром url, то получим также путь к файлу, а не контент файла.

```js
// main.js
import url from './src/assets/07.json?url';

console.log(url); // /src/assets/07.json
```

## Импорт изображения с query-параметром raw

```js
// main.js

import image from './src/assets/img/javascript.svg?raw';

console.log(image); // получим содержимое файла <svg xmlns=...
```