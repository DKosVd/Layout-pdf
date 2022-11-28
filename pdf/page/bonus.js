import imageInEllipseWithText from "../components/imageInEllipseWithText.js";
import addImage from "../elements/addImage.js";
import addText from "../elements/addText.js";


function bonusPage() {

    addText('Бонусная система', {x: 40,y: 60}, {w: 800, h: 72}, 50, '3E2E88')
    addText('Приведи клиента и получи скидку, равную его платежу', {x: 40,y: 132}, {w: 1200, h:46}, 28, '3E2E88');
    imageInEllipseWithText({x: 40, y:370}, {w: 364, h: 432});
    imageInEllipseWithText({x: 470, y:370}, {w: 364, h: 432});
    addImage('equal.png', {x: 880, y:580}, {w:80, h: 40});
    imageInEllipseWithText({x: 1010, y:370}, {w: 364, h: 432}, true);
}

export default bonusPage;