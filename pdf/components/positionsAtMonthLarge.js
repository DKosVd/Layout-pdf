import addText from "../elements/addText.js";
import textOnRect from "../elements/textOnRect.js";


const data = [
    {textX: 40, rectX: 260, colorRect: '#DC4035'},
    {textX: 510, rectX: 730, colorRect: '#31D04B'}
]



function positionsAtMonthLarge() {
    
    addText('Позиции', {x: 40, y: 172}, {w: 180, h: 40}, 30);
    data.forEach(elem => {
        const { textX, rectX, colorRect } = elem;
        addText('23', {x: textX, y: 250}, {w: 300, h: 160}, 130);
        textOnRect('-15%', {x: rectX, y: 290}, {w: 185, h: 80}, 40, colorRect);
        addText('Запросов в топ - 10', {x: 47, y: 404}, {w: 310, h: 24}, 24);
    })
    
}

export default positionsAtMonthLarge;