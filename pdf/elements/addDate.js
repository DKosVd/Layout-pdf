import doc from "../options/document.js"
import options from "../options/options.js";


function addDate(position, fontSize = 15,  date = new Date(), color = '3E2E88') {
    const {x, y} = position;
    if(typeof date === 'string') {
        doc
            .fillColor(`#${color}`)
            .fontSize(fontSize / options.RATIOHEIGHT)
            .text(date, Math.floor(x / options.RATIOWIDTH), Math.floor(y / options.RATIOHEIGHT), {lineBreak: false})
        return doc;
    } 
    const year = date.getFullYear();
    const month = date.getMonth();
    const formatedMonth = month <= 9 ? `0${month}` : month;
    const text = `${formatedMonth}/${year}`
    doc
        .fillColor(`#${color}`)
        .fontSize(fontSize / options.RATIOHEIGHT)
        .text(text, Math.floor(x / options.RATIOWIDTH), Math.floor(y / options.RATIOHEIGHT), {lineBreak: false})
    return doc;
}

export default addDate;