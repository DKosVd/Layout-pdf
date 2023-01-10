import doc from "../options/document.js"
import options from "../options/options.js";

function addLine(position, sizes, color = options.LIGHT_MAIN_COLOR, lineWidth = 0.2) {
    const { x, y } = position;
    const { w, h } = sizes;
    doc.lineWidth(lineWidth)
        .moveTo(Math.floor(x / options.RATIOWIDTH),  Math.floor(y / options.RATIOHEIGHT))
        .lineTo( Math.floor(w / options.RATIOWIDTH), Math.floor(h / options.RATIOHEIGHT))
        .strokeColor(color)
        .stroke()

    return doc;
}

export default addLine;