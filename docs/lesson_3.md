# Импорт CSS файлов

Импортируем css-стили, после чего они динамически будут встроены в документ:

```js
import "./src/assets/03.css";
```

При указании query-параметра inline значение файла будет присвоено переменной:

```js
import styles from "./src/assets/03.css?inline";

const styleEl = document.createElement("style");

styleEl.innerText = styles;

document.querySelector("head").append(styleEl);
```
