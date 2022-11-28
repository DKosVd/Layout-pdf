import doc from "../options/document.js"
import options from "../options/options.js";

function addTitleToPage(text, color = '545895') {
    doc
        .fill(`#${color}`)
        .fontSize(Math.floor(50 / options.RATIOHEIGHT))
        .text(text, Math.floor(40 / options.RATIOWIDTH), Math.floor(40 / options.RATIOHEIGHT), {lineBreak: false})
    return doc;
}

export default addTitleToPage;