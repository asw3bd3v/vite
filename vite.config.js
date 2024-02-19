import Inspect from 'vite-plugin-inspect';
import checker from 'vite-plugin-checker';

export default {
    esbuild: {
        // указываем имя функции, которая должна быть вызвана для обработки
        // каждого JSX элемента
        jsxFactory: 'create',
        // указываем содержимое, которое автоматически будет вставлено в jsx-файлы
        jsxInject: 'import { create } from "/src/12-create.js"',
    },
    // сменить название папки public
    //publicDir: 'build',
    plugins: [
        Inspect(),
        checker({
            typescript: true,
        })
    ]
}