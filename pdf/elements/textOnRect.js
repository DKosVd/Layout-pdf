import doc from "../options/document.js"
import options from "../options/options.js";

function textOnRect(text, position, sizes, fontSize = 15, colorRect = '#3E2E88') {
    const { x, y } = position;
    const { w, h } = sizes;
    doc.rect(Math.floor(x / options.RATIOWIDTH), Math.floor(y / options.RATIOHEIGHT), Math.floor(w / options.RATIOWIDTH), Math.floor(h / options.RATIOHEIGHT))
        .fillAndStroke(colorRect, '#fffffff')
        .fill('#ffffff').stroke()
        .fontSize(Math.floor(fontSize / options.RATIOHEIGHT))
        .text(text, Math.floor( (x + 34) / options.RATIOWIDTH), Math.floor((y + 20) / options.RATIOHEIGHT), {lineBreak: false})
    //34 and 16 margin
    return doc;
}

export default textOnRect;