# Интеграция Vue

## Установка vite

```
npm create vite@latest
npm create vite@^4
```

## Установка vue

Установим vue следующим образом:

```
npm i vue @vitejs/plugin-vue
```

```js
// vite.config.js
import vue from "@vitejs/plugin-vue";

export default {
    plugins: [vue()]
};
```

```vue
<script setup>
// App.vue
import { ref } from "vue";

const count = ref(0);
</script>

<template>
    <h1>Counter</h1>

    <button @click="count++">Count: {{ count }}</button>
</template>

```

```js
// main.js
import App from './App.vue';
import { createApp } from 'vue';

createApp(App).mount('#app');
```