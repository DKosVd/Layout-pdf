import doc from "../options/document.js"
import options from "../options/options.js";
import {resolve} from 'path';

function addImage(image, position, sizes) {
    const { x, y } = position;
    const { w, h } = sizes;
    doc.image(resolve(`pdf/images/${image}`), 
                Math.floor(x / options.RATIOWIDTH), 
                Math.floor(y / options.RATIOHEIGHT), 
                {width: Math.floor(w / options.RATIOWIDTH), height: Math.floor(h / options.RATIOHEIGHT)})
    return doc;
}

export default addImage;