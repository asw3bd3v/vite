import { parse } from "csv-parse/sync";
import Inspect from "vite-plugin-inspect";

export default {
	plugins: [
		Inspect(),
		{
			name: 'vite:csv',
			// функция-хук, которая будет выполняться при каждом импорте модулей
			// в javascript-файлах
			// src - содержимое модуля
			// id - путь до модуля
			async transform(src, id) {
				if (/\.csv$/.test(id)) {
					const records = parse(src, { columns: true });

					return {
						code: `export default ${JSON.stringify(records)}`,
					}
				}
			}
		}
	],
};