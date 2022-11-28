import doc from "../options/document.js"
import options from "../options/options.js";

function addEllipse(position, sizes, color = '#E8EBFA', colorBorder = '#ffffff') {
    //Отсчет в данном случае идет с середины фигуры, поэтому нужно определить место для элементов исходя из R 
    const { x, y } = position;
    const { w, h } = sizes;
    const rX = w / 2;
    const rY = h / 2.5;
    const newX = x + rX;
    const newY = y + rY;
    // ROTATE CIRLE/ELLIPSE
    doc.ellipse(Math.floor(newX / options.RATIOWIDTH), Math.floor(newY / options.RATIOHEIGHT), Math.floor(rX / options.RATIOWIDTH), Math.floor(rY / options.RATIOHEIGHT))
        .lineWidth(0.5)
        .fillOpacity(0.8)
        .fillAndStroke(color, colorBorder)
        
    return doc;
}

export default addEllipse;