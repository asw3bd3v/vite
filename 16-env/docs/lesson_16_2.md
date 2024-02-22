# Переменные окружения

Vite все доступные переменные окружения присваивает специальному объекту env, который находится в import.meta.

```js
// main.js
console.log(import.meta.env);

{
    "BASE_URL": "/",
    "MODE": "development",
    "DEV": true,
    "PROD": false,
    "SSR": false
}
```

Чтобы определить свои переменные окружения, нужно в корне проекта создать специальный файл .env.
По умолчанию для переменных окружения используется префикс VITE. Если его не указать, то переменная будет не доступна.

```
VITE_API_URL=https://local.api.ur
VITE_ANOTHER_VAR=local var
```

Можно переопределить префикс в vite.config.js.

```js
export default {
    envPrefix: 'APP_'
};
```

После этого ранее объявленные переменные будут не доступны в объекте env.