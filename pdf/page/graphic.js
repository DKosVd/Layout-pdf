import addGraphic from "../elements/addGraphic.js";
import addText from "../elements/addText.js";
import titleWithLogo from '../components/titleWithLogo.js';
import addTitleToPage from "../elements/addTitleToPage.js";
import addBorder from "../elements/addBorder.js";

const data = [
    {
        value:2794,
        date: 'Январь'
    },
    {
        value: 4049,
        date: 'Февраль'
    },
    {
        value: 5732,
        date: 'Март'
    },
]

const dataValue = [
    {
        value: 2980,
        date: 'Январь'
    },
    {
        value: 3423,
        date: 'Февраль'
    },
    {
        value: 2982,
        date: 'Март'
    },
    {
        value: 3900,
        date: 'Апрель'
    },
    {
        value: 4615,
        date: 'Май'
    },
    {
        value: 5215,
        date: 'Июнь'
    }
]

function graphic() {
    titleWithLogo('ПОИСКОВОЙ ТРАФИК ЗА 3 МЕСЯЦА');
    // addTitleToPage('Поисковой трафик за 3 месяца');
    addGraphic(data);
    // addBorder({  x: 100 + 40, y: 900 - 735}, {w: 1400, h: 780});
    addText("appbooster.com снова показал рекордную посещаемость. Рекорд был был побит более чем на 1000 посетителей. «Яндекс» вырос почти на 300 человек и впервые преодолел планку в 1000 посетителей, Google вырос на 1400 человек и приблизился к показателю в 5000 В Google по-прежнему наблюдаем рост позиций внутри топ-10. В марте мы вышли в топ-3 по всем запросам группы ASO. В то же время мы потеряли небольшую часть запросов с главной страницы.", {x: 40, y: 795}, {w: 1360,h: 96});
}

export default graphic;