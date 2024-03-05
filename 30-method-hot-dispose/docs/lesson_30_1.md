# Метод hot.dispose()

Копируем данные из папки 29-method-hot-accept.

Бывают случаи, когда некоторые javascript-модули после выполнения оставляют некоторые побочные эффекты. Такими побочными эффектами могут быть модификации DOM-дерева, сохранение данных в локальном хранилище браузера и даже вызов метода console.log() для вывода данных в консоли. В этом уроке познакомимся с тем, как можно выполнить дополнительную работу для того, чтобы отменить некоторые побочные эффекты перед тем как принимать обновленный модуль и выполнять горячую замену.

Разберем на примере побочного эффекта, который будет добавлять стили в элементе head.

Добавим в module.js следующий код.

```js
let styles;

function addStylesheet() {
	styles = document.createElement("style");

	styles.innerHTML = "body {background: indigo; color: white}";

	document.head.appendChild(styles);
}

addStylesheet();
```

Теперь если изменим color, например на yellow, то в DOM-дереве будут присутствовать два тега стиля (после hmr):

```html
<style>
	body {
		background: indigo;
		color: white;
	}
</style>
<style>
	body {
		background: indigo;
		color: yellow;
	}
</style>
```

Т.е. после каждого изменения module.js (ctrl + s) в DOM-дереве будут добавляться теги style. Поэтому необходимо выполнить вручную некоторый код, который бы удалил предыдущие стили.

Воспользуемся методом dispose() у import.meta.hot в котором будем вызывать функцию по удалению стилей перед горячей заменой.

```js
// module.js

function removeStylesheet() {
    styles.remove();
}

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        removeStylesheet();
    });
}
```