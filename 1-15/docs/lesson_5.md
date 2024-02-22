# PostCSS плагины (Tailwind CSS)

Установка tailwind

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

В tailwind.config.js указываем к каким файлам будем применят.

```js
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

В assets/05.css прописываем следующие директивы:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

В main.js подключаем 05.css
```js
import './src/assets/05.css';
```

Теперь можно использовать tailwind-классы в index.html:

```html
<h1 class="bg-[#18181A] text-white text-[30px]">Hello Vite!</h1>
```