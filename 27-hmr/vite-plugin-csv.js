import { parse } from "csv-parse/sync";

export default () => {
    let config = null;

    return {
        name: 'csv',

        //apply: 'serve',
        //apply: 'build',
        apply: (config, { command, mode }) => {
            console.log(command, mode); // serve development

            return mode === 'development';
        },

        configResolved(resolvedConfig) {
            config = resolvedConfig;
        },

        // функция-хук, которая будет выполняться при каждом импорте модулей
        // в javascript-файлах
        // src - содержимое модуля
        // id - путь до модуля
        transform(src, id) {
            const showColumns = config.command === 'serve'
            
            if (/\.csv$/.test(id)) {
                const records = parse(src, { columns: showColumns });

                return {
                    code: `export default ${JSON.stringify(records)}`,
                }
            }
        },
        transformIndexHtml(html) {
            return html.replace(/<\/body>/, `<script>console.log("from transformIndexHtml");</script></body>`)
        }
    }
};