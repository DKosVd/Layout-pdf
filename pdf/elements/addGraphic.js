import doc from "../options/document.js"
import options from "../options/options.js";
import addText from "./addText.js";
//Не все элементы умещаются на графике

const HEIGHT_OF_GRAPHIC = 563;
const WIDTH_OF_GRAPHIC = 1360;

let data = null;

const startPoint = {
    x: 100, 
    y: 735
};

function addGraphic(dataValue) {
    data = dataValue;
    drawSystemCoord();
    addNumberOY(7000, 7)
    addColumn(7000, data.length - 1);
}


function addColumn(maxValue, nH) {
    const margin = Math.floor(20 / options.RATIOWIDTH);
    const height = Math.floor(HEIGHT_OF_GRAPHIC / options.RATIOHEIGHT);
    const stepH = height / maxValue;
    //(Full width OX/OY - startPoint.x - ( margin * count of element) )  / count of element
    const widthElem = ( ( (WIDTH_OF_GRAPHIC - startPoint.x - (30 * (nH + 1)) )) / (nH+ 1)) / options.RATIOWIDTH;

    const Y = Math.floor(startPoint.y / options.RATIOHEIGHT);
    const x = Math.floor(startPoint.x / options.RATIOWIDTH);
    const widthStart = {
        width: x
    };
    for(let i = 0; i < data.length; i++) {
        const y = (Y - (data[i].value * stepH));
        widthStart.width = i === 0 ? widthStart.width : widthStart.width + widthElem + margin; 
        doc.rect(widthStart.width, y, widthElem, Y - y)
           .fillAndStroke(options.MAIN_COLOR, '#fffffff')
           .fill('#ffffff').stroke()
        addDateOX(data[i].date, {x: widthStart.width, y: 750}, {w: widthElem, h: 18});
        addTextIntoColumn(data[i].value, {x: widthStart.width, y: (Y - (Y - y) / 2)}, {w: widthElem, h: 18});
    }
}

function addDateOX(month, position, sizes) {
    const {x, y} = position;
    const {w, h} = sizes;
    addText(month, {x: x  * options.RATIOWIDTH, y: y}, {w: w *  options.RATIOWIDTH, h: h* options.RATIOHEIGHT}, 18,  '#000000', 'center')
}

function addTextIntoColumn(text, position, sizes) {
    const {x, y} = position;
    const {w, h} = sizes;
    addText(text, {x: x * options.RATIOWIDTH, y: y * options.RATIOHEIGHT}, {w: w * options.RATIOWIDTH, h: h * options.RATIOHEIGHT}, 24, '#ffffff', 'center');
    addText(`посетите${correctEnding(text)}`, {x: x * options.RATIOWIDTH, y: (y + 5) * options.RATIOHEIGHT}, {w: w * options.RATIOWIDTH, h: h * options.RATIOHEIGHT}, 16, '#ffffff', 'center');
}

function correctEnding(number, count) {
    const ending = +number.toString().slice(count);
    if(ending === 1) {
        return 'ль';
    }
    if(ending >= 2 && ending <= 4) {
        return 'ля';
    }
    if((ending >= 5 && ending <= 20 || ending === 0)) {
        return 'лей';
    }
    return correctEnding(ending, -1);
}

function addNumberOY(maxValue, n) {

    const number = Math.round(maxValue / n);
    const step = Math.floor(HEIGHT_OF_GRAPHIC / n);
    const Y = startPoint.y;

    doc.fillColor('#101010');
    for(let i = 0; i <= n; i++) {

        const text = number*i;
        const x = Math.floor(30 / options.RATIOWIDTH);
        const y = Math.floor( (Y - (step * i)) / options.RATIOHEIGHT );

        doc.fontSize(Math.floor(17.5 / options.RATIOHEIGHT))
           .text(text, x, y, {lineBreak: false, align: 'right'});

        doc.lineCap('butt')
            .strokeColor('#D5CCFE')
            .moveTo(startPoint.x / options.RATIOWIDTH, y)
            .lineTo(Math.floor(WIDTH_OF_GRAPHIC / options.RATIOWIDTH), y)  
            .stroke();
    }
}

function drawSystemCoord() {

    doc.lineWidth(Math.floor(1 / options.RATIOHEIGHT));
    const OY = Math.floor(startPoint.y / options.RATIOHEIGHT);
    const OX = Math.floor(startPoint.x / options.RATIOWIDTH);
    //OX
    doc.lineCap('butt')
       .strokeColor('#D5CCFE')
       .moveTo(OX, OY)
       .lineTo(Math.floor(WIDTH_OF_GRAPHIC / options.RATIOWIDTH), OY)  
       .stroke();
    //OY
    doc.lineCap('butt')
       .strokeColor('#D5CCFE')
       .moveTo(OX, OY)
       .lineTo(OX, Math.floor( (startPoint.y - HEIGHT_OF_GRAPHIC - options.DEFAULT_MARGIN) / options.RATIOHEIGHT))  
       .stroke();
}

export default addGraphic;