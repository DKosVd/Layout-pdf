import doc from "../options/document.js"
import options from "../options/options.js";


function addText(text, position, sizes, fontSize = '15', color = "#ffffff") {
    const { x, y } = position;
    const { w, h } = sizes;
    doc.fillColor(`#${color}`)
        .fontSize(Math.floor(fontSize / options.RATIOHEIGHT))
        .text(text, Math.floor(x / options.RATIOWIDTH), Math.floor(y / options.RATIOHEIGHT), {width: Math.floor(w / options.RATIOWIDTH), height: Math.floor(h / options.RATIOHEIGHT), lineBreak: false} )
    return doc;
}

export default addText;