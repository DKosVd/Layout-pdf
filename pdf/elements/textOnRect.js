import doc from "../options/document.js"
import options from "../options/options.js";

function textOnRect(text, position, sizes, fontSize = 15, colorRect = options.MAIN_COLOR, radius = 5) {
    const { x, y } = position;
    const { w, h } = sizes;
    doc.roundedRect(Math.floor(x / options.RATIOWIDTH), Math.floor(y / options.RATIOHEIGHT), Math.floor(w / options.RATIOWIDTH), Math.floor(h / options.RATIOHEIGHT), radius)
        .fillAndStroke(colorRect, '#fffffff')
        .fill('#ffffff').stroke()
        .fontSize(Math.floor(fontSize / options.RATIOHEIGHT))
        .text(text, Math.floor( (x + 34) / options.RATIOWIDTH), Math.floor((y + 20) / options.RATIOHEIGHT), {lineBreak: false, align: 'center'})
    //34 and 20 margin
    return doc;
}

export default textOnRect;