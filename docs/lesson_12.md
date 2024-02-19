# Поддержка JSX синтаксиса

Мы не будем использовать react версию JSX, а определим собственные правила для интерпретации JSX синтаксиса.

Для преобразования JSX синтаксиса Vite использует другой сборщик - esbuild.

Для этого в vite.config.js мы указываем следующие параметры:

```js
export default {
    esbuild: {
        // указываем имя функции, которая должна быть вызвана для обработки
        // каждого JSX элемента
        jsxFactory: 'create',
        // указываем содержимое, которое автоматически будет вставлено в jsx-файлы
        jsxInject: 'import { create } from "/src/12-create.js"',
    },
}
```

А в jsx файле пишем следующее:

```jsx
import "./assets/12.css";

export const template = (
	<div class="wrapper">
		<p>
			<a href="#">link</a>
		</p>
	</div>
);
```
