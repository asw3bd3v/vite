import Inspect from "vite-plugin-inspect";
import { format, resolve } from "path";

export default {
    plugins: [Inspect()],
    build: {
        lib: {
            entry: [
                resolve(__dirname, 'src/index.js'),
                resolve(__dirname, 'src/log.js'),
            ],
            name: 'Pluck', // название библиотеки

            // format - формат файла, который будет сгенерирован
            // name - название оригинального javascript-файла, 
            // на основе которого генерируется сборка
            fileName: (format, name) => {
                if (format === 'es') {
                    return `${name}.js`;
                }

                return `${name}.${format}`;
            },
            //fileName: 'pluck', // название файла после сборки
        }
    }
};