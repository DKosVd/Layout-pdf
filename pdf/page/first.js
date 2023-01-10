import addDate from "../elements/addDate.js";
import addImage from "../elements/addImage.js";
import addText from "../elements/addText.js";
import textOnRect from "../elements/textOnRect.js";
import options from "../options/options.js";


function first() {
   firstNew();
}   

function firstOld() {
    addImage('arrow-rotate.png', {x: 500, y: 210}, {w: 900, h: 700})
    addImage('appbooster.jpg', {x: 40, y: 253}, {w: 250, h: 50});
    addImage('close.png', {x: 318, y: 271}, {w: 18, h: 18})
    addImage('lz.png', {x: 360, y: 253}, {w: 250, h: 50});
    addText('Отчёт о поисковом продвижении', {x: 40, y: 343}, {w: 600,h: 240}, 60,  options.MAIN_COLOR);
    textOnRect('appbooster.com', {x: 40, y: 613}, {w: 470, h: 83}, 40);
    addDate({x: 40, y: 850}, 25);
}

function firstNew() {
    addImage('blue-block.png', {x: 750, y: 0}, {w: 740, h: 710});
    addImage('orange-block.png', {x: 680, y: 660}, {w: 800, h: 300})
    addImage('appbooster.jpg', {x: 40, y: 240}, {w: 250, h: 50});
    addImage('lz.png', {x: 360, y: 240}, {w: 250, h: 50});
    addText('ОТЧЕТ О ПОИСКОВОМ ПРОДВИЖЕНИИ', {x: 40, y: 343}, {w: 700, h: 240}, 60,  options.MAIN_COLOR);
    textOnRect('appbooster.com', {x: 40, y: 613}, {w: 470, h: 83}, 40,  options.MAIN_COLOR, 0);
    addDate({x: 1260, y: 40}, 25);
}

function firstPolza() {

}

export default first;