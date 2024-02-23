import Inspect from "vite-plugin-inspect";
import { resolve } from "path";

export default {
    plugins: [Inspect()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'Pluck', // название библиотеки
            fileName: 'pluck', // название файла после сборки
        }
    }
};