import addText from "../elements/addText.js";
import textOnRect from "../elements/textOnRect.js";


const data = [
    {textX: 180, rectX: 40, colorRect: '#DC4035'},
    {textX: 590, rectX: 450, colorRect: '#31D04B'}
]



function positionsAtMonthSmall() {
    
    addText('Позиции', {x: 40, y: 172}, {w: 180, h: 40}, 30);
    data.forEach(elem => {
        const { textX, rectX, colorRect } = elem;
        addText('23', {x: textX, y: 290}, {w: 83, h: 40}, 30);
        textOnRect('-15%', {x: rectX, y: 290}, {w: 120, h: 60}, 24, colorRect);
        addText('Запросов в топ - 10', {x: textX, y: 330}, {w: 200, h: 18}, 14);
    })
    
}

export default positionsAtMonthSmall;