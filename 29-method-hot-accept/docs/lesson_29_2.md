# Метод hot.accept()

Допустим module.js будет импортировать еще один модуль submodule.js.

```js
// submodule.js
export default "default message from submodule.js";

console.log("from submodule.js");
```

Теперь также можно отслеживать в module.js изменения в тех модулях, которые импортируются.

```js
// module.js
import "./submodule";

if (import.meta.hot) {
	import.meta.hot.accept(["./submodule"], ([newSubmodule]) => {
		// если в submodule.js будет синтаксическая ошибка, то в newSubmodule
		// придет undefined
		if (newSubmodule) {
			console.log(newSubmodule);
		}
	});
}
```
