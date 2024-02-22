# CSS препроцессоры

Устанавливаем Sass-препроцессор

```
npm i -D sass
```

Теперь в main.js можно импортировать sass-файлы.

```js
import "./src/assets/06.sass";
```

Также стили можно вынести в модуль 06.module.sass.

```sass
.wrapper
	background-color: #18181a
	color: #fff
```

```js
// main.js
import styles from './src/assets/06.module.sass';

console.log(styles);

document.body.className = styles.wrapper;
```