# Переменные окружения

Для каждого режима можно определить отдельные файлы с переменными окружения, которые будут доступны только в определенном режиме.

Например для режима production можно создать файл .env.production.

```
APP_API_URL=https://production.api.ur
APP_ANOTHER_VAR=production var
```

После чего выполняем команды:

```
npm run build
npm run preview
```

и можно увидеть что переменные изменились.

Можно создавать различные файлы с переменными окружения, например .env.staging.

```
APP_API_URL=https://staging.api.ur
APP_ANOTHER_VAR=staging var
```

В этом случае при сборке указываем дополнительный параметр.

```
npm run build -- --mode staging
npm run preview
```

```
npm run dev -- --mode staging
```