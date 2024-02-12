import './src/assets/03.css';
//import './src/assets/04a.css';
//import './src/assets/04b.css';

// Превращаем в css модули
import stylesA from './src/assets/04a.module.css';
import stylesB from './src/assets/04b.module.css';

console.log(stylesA);
console.log(stylesB);

// document.querySelector('.heading').className = `${stylesA.heading} ${stylesB.heading}`;

// можно использовать деструктурирование объекта
import { heading as headingFontSize } from './src/assets/04a.module.css';
import { heading as headingColor } from './src/assets/04b.module.css';

document.querySelector('.heading').className = `${headingFontSize} ${headingColor}`;