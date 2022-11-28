import addEllipse from "../elements/addEllipse.js";
import addImage from "../elements/addImage.js";
import addLine from "../elements/addLine.js";
import addText from "../elements/addText.js";
import textOnRect from "../elements/textOnRect.js";
import doc from "../options/document.js"
import options from "../options/options.js";


function imageInEllipseWithText(position, sizes, isTitleInRect) {
    const {x, y} = position;
    const {w, h} = sizes;
    
    isTitleInRect ? 
        textOnRect("3 МЕСЯЦА", {x: x + (w / 2) - w * 0.35, y: y + 10}, {w: w / 1.4, h: 80}, 30, '3E2E88'):
        addText("100.000₽", {x: x + (w / 2) - w * 0.3, y: y}, {w: w / 1.5, h: 40}, 40, '3E2E88');

    addEllipse({x, y: y + 90}, {w:w, h:h * 0.8});
    addImage('wallet.png', {x: x + (w / 2) - w * 0.25, y: y + h * 0.3}, {w: w / 2, h:h * 0.8 / 2 })
    addText("Ваш платёж", {x: x + (w / 2) - w * 0.16, y: y + h - 20}, {w: w / 2, h: 40}, 15);
}

export default imageInEllipseWithText;