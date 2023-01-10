import imageInEllipseWithText from "../components/imageInEllipseWithText.js";
import addImage from "../elements/addImage.js";
import addText from "../elements/addText.js";
import addTitleToPage from "../elements/addTitleToPage.js";
import options from "../options/options.js";

options
function bonusPage() {
    newBonusPage();
}


function oldBonusPage() {
    addText('Бонусная система', {x: 40,y: 60}, {w: 800, h: 72}, 50,  options.MAIN_COLOR)
    addText('Приведи клиента и получи скидку, равную его платежу', {x: 40,y: 132}, {w: 1200, h:46}, 28,  options.MAIN_COLOR);
    imageInEllipseWithText({x: 40, y:370}, {w: 364, h: 432});
    imageInEllipseWithText({x: 470, y:370}, {w: 364, h: 432});
    addImage('equal.png', {x: 880, y:580}, {w:80, h: 40});
    imageInEllipseWithText({x: 1010, y:370}, {w: 364, h: 432}, true);
}

function newBonusPage() {
    addTitleToPage('Бонусная система');
    addText('Приведи клиента и получи скидку, равную его платежу', {x: 40,y: 132}, {w: 1200, h:46}, 28,  options.MAIN_COLOR);
    textUnderImage();
}

function textUnderImage() {
    addText('100.000Р', {x: 100, y: 600}, {w: 200, h: 40}, 30);    
    addImage('equal.png', {x: 880, y:580}, {w:80, h: 40});
}


export default bonusPage;