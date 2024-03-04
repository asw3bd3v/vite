# HMR

Копируем данные из папки 24-25-creating-plugin.

Но на данный момент плагин не поддерживает горячую замену модулей (hot module replacement). Если сейчас будет модифицировать csv файл, то будет происходить полная перезагрузка страницы.

Реализуем поддержку HMR для нашего плагина. Добавим в vite-plugin-csv.js еще один хук.

Сначала реализуем отправку события браузеру.

```js
// vite-plugin-csv.js
export default () => {
	let config = null;

	return {
		// Данный хук будет вызываться каждый раз, когда мы будем модифицировать файлы
		// импортируемых модулей. Т.е. будем отправлять уведомление бразуеру через сокет
		// соединение context.server.ws.send(...).
		async handleHotUpdate(context) {
			if (/\.csv$/.test(context.file)) {
				context.server.ws.send({
					type: "custom",
					event: "csv-update",
					data: {
						url: context.modules[0].url,
						data: parse(await context.read(), { columns: true }),
					},
				});

				// Отправляем пустой массив, чтобы сообщить vite, что мы будем сами
				// обрабатывать горячую замену модулей.
				return [];
			}
		},
	};
};
```

Теперь реализуем прослушивание события на клиенте.

```js
// main.js

if (import.meta.hot) {
	import.meta.hot.on("csv-update", ({ data, url }) => {
		console.log(`[vite] hot updated: ${url}`);
		document.querySelector("pre").textContent = JSON.stringify(data);
	});
}
```
