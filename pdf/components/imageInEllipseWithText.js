import addEllipse from "../elements/addEllipse.js";
import addImage from "../elements/addImage.js";

import addLine from "../elements/addLine.js";
import addText from "../elements/addText.js";
import textOnRect from "../elements/textOnRect.js";
import doc from "../options/document.js"
import options from "../options/options.js";
import imageInCirlce from "./imageInCircle.js";


function imageInEllipseWithText(position, sizes, isTitleInRect) {
    const {x, y} = position;
    const {w, h} = sizes;
    
    isTitleInRect ? 
        textOnRect("3 МЕСЯЦА", {x: x + (w / 2) - w * 0.35, y: y + 10}, {w: w / 1.4, h: 80}, 30, '3E2E88'):
        addText("100.000₽", {x: x + (w / 2) - w * 0.3, y: y}, {w: w / 1.5, h: 40}, 40, '3E2E88');

    imageInCirlce(position, sizes);    
    addText("Ваш платёж", {x: x + (w / 2) - w * 0.16, y: y + h - 20}, {w: w / 2, h: 40}, 15);
}

export default imageInEllipseWithText;