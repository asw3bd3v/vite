# Импорт css модулей

```js
// main.js

//import './src/assets/04a.css';
//import './src/assets/04b.css';

// Превращаем в css модули
import stylesA from "./src/assets/04a.module.css";
import stylesB from "./src/assets/04b.module.css";

console.log(stylesA);
console.log(stylesB);

document.querySelector(
	".heading"
).className = `${stylesA.heading} ${stylesB.heading}`;
```

```css
/** 04a.module.css */

.heading {
	font-size: 30px;
}
```

```css
/** 04b.module.css */

.heading {
	font-size: 30px;
}
```

Также можно использовать деструктурирование объекта:

```js
import { heading as headingFontSize } from "./src/assets/04a.module.css";
import { heading as headingColor } from "./src/assets/04b.module.css";

document.querySelector(
	".heading"
).className = `${headingFontSize} ${headingColor}`;
```
