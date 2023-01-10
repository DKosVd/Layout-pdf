import doc from "../options/document.js";
import options from "../options/options.js";
//Draw border around position 
function addBorder(position, sizes) {
    const {x, y} = position;
    const {w, h} = sizes;
    const newX = x - options.DEFAULT_MARGIN * 2;
    const newY = y - options.DEFAULT_MARGIN * 1.5;
    doc.lineCap('butt')
        .strokeColor('#eaeaeb')
        .moveTo(newX / options.RATIOWIDTH, newY / options.RATIOHEIGHT)
        .lineTo(w / options.RATIOWIDTH, newY / options.RATIOHEIGHT)
        .lineTo(w  / options.RATIOWIDTH, h / options.RATIOHEIGHT)
        .lineTo(newX / options.RATIOWIDTH, h / options.RATIOHEIGHT)
        .lineTo(newX / options.RATIOWIDTH, newY / options.RATIOHEIGHT)  
        .stroke();
}

export default addBorder;