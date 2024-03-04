# Взаимодействие клиента и сервера

Копируем данные из папки 27-hmr.

В vite есть возможность обмениваться сообщениями между плагинами и клиентом. Данный обмен реализуется также с помощью сокет соединения.

## Отправка сообщения от сервера клиенту

```js
// vite-plugin-csv.js

export default () => {
	let config = null;

	return {
		configureServer(server) {
			server.ws.on("connection", () => {
				server.ws.send("connected", "Connection established");
			});

			// client - сокет соединение
			server.ws.on("ping", (message, client) => {
				console.log(message);

				client.send("pong", "Hello client");
			});
		},
	};
};
```

## Отправка сообщения от клиента серверу

```js
// main.js

if (import.meta.hot) { // данный код выполняется только в режиме разработки
	// принимаем сообщение от сервера
	import.meta.hot.on("connected", (message) => {
		console.log(message);

		// отправляем сообщение серверу
		import.meta.hot.send("ping", "Hello server!");
	});

	import.meta.hot.on("pong", (message) => {
		console.log(message);
	});
}
```

Данный код выполняется только в режиме разработки.