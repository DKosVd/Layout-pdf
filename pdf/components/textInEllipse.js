import addEllipse from "../elements/addEllipse.js";
import addText from "../elements/addText.js";
import options from "../options/options.js";

function textInEllipse(position, ellipseOptions, textOptions) {
    const {color, colorBorder} = ellipseOptions;
    const {align, text, fontSize, colorText} = textOptions;
    addEllipse(position, {w: ellipseOptions.width, h: ellipseOptions.height}, color, colorBorder);
    addText(text, {x: position.x, y: position.y + options.DEFAULT_MARGIN / 1.5}, {w: textOptions.width, h: textOptions.height}, fontSize, colorText, align);
}

export default textInEllipse;