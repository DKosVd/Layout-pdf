import doc from "../options/document.js"
import options from "../options/options.js";
import addImage from "./addImage.js";
import addText from "./addText.js";

const data = ['Поиск новых интентов, создание и оптимизация категорий под них.', 'Добавили сортировку по убыванию цены в катологах', 'Провелим анализ товаров и спроса на них, в течение года, составили файл сезонности'];


function addList(position, sizes) {
    const {x, y} = position;
    const {w, h} = sizes;
    const margin = 40;
    addImage('warning.png', {x: 20, y: 530}, {w: 50, h: 40});
    addText('Выполненные задачи', {x: 80, y: 530}, {w: 430, h: 40}, 30);
    for(let i = 0; i < data.length; i++) {
        addText(`${i + 1}.   ${data[i]}`, {x, y: y + margin * (i + 1)}, {w, h});
    }
}

export default addList;