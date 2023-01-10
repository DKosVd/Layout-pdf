import addLine from "../elements/addLine.js";
import addText from "../elements/addText.js";
import options from "../options/options.js";

const BIGFONTSIZE = 200;
const MIDDLEFONTSIZE = 170;
const SMALLFONTSIZE = 80;

function briefSummary() {
    twoResult();
}


function oneResult() {
    addText('+80%', {x: options.DEFAULT_MARGIN, y: 200}, {w: 1440 - options.DEFAULT_MARGIN, h: 90}, 50, 'ff7d1d', 'center');
    addText('4 234', {x: options.DEFAULT_MARGIN, y: 350}, {w: 1440 - options.DEFAULT_MARGIN, h: 250}, BIGFONTSIZE,  options.MAIN_COLOR, 'center');
    addText(`Проработали, создали и опубликовали новых страниц в прошлом месяце`, {x: options.DEFAULT_MARGIN, y: 600}, {w: 1440 - options.DEFAULT_MARGIN, h: 400}, 30, '000000', 'center');
}

function twoResult() {
    addText('+80%', {x: options.DEFAULT_MARGIN, y: 300}, {w: (1440 - options.DEFAULT_MARGIN) / 2, h: 90}, 40, options.SECONDARY_COLOR, 'center');
    addText('4 234', {x: options.DEFAULT_MARGIN, y: 350}, {w: (1440 - options.DEFAULT_MARGIN) / 2, h: 250}, MIDDLEFONTSIZE,  options.MAIN_COLOR, 'center');
    addText(`Проработали, создали и опубликовали новых страниц в прошлом месяце`, {x: options.DEFAULT_MARGIN, y: 600}, {w: (1440 - options.DEFAULT_MARGIN) / 2, h: 400}, 24, '#000000', 'center');

    addLine({x: (1440 + options.DEFAULT_MARGIN) / 2, y: 40}, {w: (1440 + options.DEFAULT_MARGIN) / 2, h: 860});

    addText('+80%', {x: (1440 - options.DEFAULT_MARGIN) / 2 + options.DEFAULT_MARGIN, y: 300}, {w: (1440 - options.DEFAULT_MARGIN) / 2, h: 90}, 40, options.SECONDARY_COLOR, 'center');
    addText('4 234', {x: (1440 - options.DEFAULT_MARGIN) / 2 + options.DEFAULT_MARGIN, y: 350}, {w: (1440 - options.DEFAULT_MARGIN) / 2, h: 250}, MIDDLEFONTSIZE,  options.MAIN_COLOR, 'center');
    addText(`Проработали, создали и опубликовали новых страниц в прошлом месяце`, {x: (1440 - options.DEFAULT_MARGIN) / 2 + options.DEFAULT_MARGIN, y: 600}, {w: (1440 - options.DEFAULT_MARGIN) / 2, h: 400}, 24, '#000000', 'center');
}

export default briefSummary;