import addDate from "../elements/addDate.js";
import addImage from "../elements/addImage.js";
import addText from "../elements/addText.js";
import textOnRect from "../elements/textOnRect.js";


function first() {
    addImage('arrow-rotate.png', {x: 500, y: 210}, {w: 900, h: 700})
    addImage('appbooster.jpg', {x: 40, y: 253}, {w: 250, h: 50});
    addImage('close.png', {x: 318, y: 271}, {w: 18, h: 18})
    addImage('lz.png', {x: 360, y: 253}, {w: 250, h: 50});
    addText('Отчёт о поисковом продвижении', {x: 40, y: 343}, {w: 600,h: 240}, 60, '3E2E88');
    textOnRect('appbooster.com', {x: 40, y: 613}, {w: 470, h: 83}, 40);
    addDate({x: 40, y: 850}, 25);
}   

export default first;