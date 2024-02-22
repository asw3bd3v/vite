# TypeScript

По умолчанию vite использует esbuild для преобразования typescript код в javascript.

Поэтому для проверки типов мы установим отдельно typescript-компилятор:

```
npm i -D typescript
```

В package.json добавляем новую команду:

```json
"scripts": {
    "tsc": "tsc --noEmit"
  },
```

Создаем конфигурационный файл tsconfig.json

```json
{
    "compilerOptions": {
        "rootDir": "./"
    }
}
```

Теперь запускаем команду в терминале для отслеживания изменений в ts-файлах.

```
npm run tsc -- --watch
```

Но чтобы не запускать каждый раз данную команду, установим пакет vite-plugin-checker, который будет отображать ошибки typescript в браузере.

```
npm i vite-plugin-checker -D
```

В vite.config.js

```js
import checker from 'vite-plugin-checker';

export default {
    plugins: [
        checker({
            typescript: true,
        })
    ]
}
```