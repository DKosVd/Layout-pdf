import doc from "../options/document.js"
import options from "../options/options.js";
import addText from "./addText.js";

const FONTSIZE = 13;

function addRow(position, color, r = 0) {
    const {x, y} = position;
    doc.roundedRect(x / options.RATIOWIDTH, y / options.RATIOHEIGHT, options.WIDTH - (2 * x / options.RATIOWIDTH), 100 / options.RATIOHEIGHT, r / options.RATIOWIDTH)
        // .fillAndStroke(color, '#cccccc') 
        .fill(color)
        .stroke()
}


//margin depend how many column(th) for table
function addColumnForRow(row, yStart, colorText) {
    const { columns, header } = row;
    const countColumns = columns.length;
    const START_POSITION = options.DEFAULT_MARGIN / 2 + options.DEFAULT_MARGIN;
    const WIDTH_COLUMN = (options.WIDTH * options.RATIOWIDTH ) / countColumns ;
    for(let i = 0; i < countColumns; i++) {
        const column = columns[i];
        addText(column.text, {x: (START_POSITION + WIDTH_COLUMN * i), y: START_POSITION / 2 + yStart}, {w: WIDTH_COLUMN * 0.7, h: options.DEFAULT_MARGIN * 2}, getFontSizeForColumn(header), colorText)
    }
}

function getFontSizeForColumn(header) {
    if(header) return options.FONTSIZE;
    return FONTSIZE;
}

function getColorForRow(idx, header) {
    if(header) return options.MAIN_COLOR;
    return idx % 2 === 0 ? '#ffffff' : options.LIGHT_MAIN_COLOR;
}

function getColorForTextRow(header) {
    if(header) return '#ffffff';
    return '#000000'
}

function getRadiusForRow(idx, first, last) {
    if(idx === first) return options.DEFAULT_RADIUS;
    if(idx === last) return options.DEFAULT_RADIUS;
}

function addTable(position, content) {
    const {rows} = content;

    const FIRST = 0;
    const LAST = rows.length - 1;

    for(let i = 0; i < rows.length; i++) {
        const row = rows[i];
        addRow({x: options.DEFAULT_MARGIN, y: options.DEFAULT_MARGIN + options.DEFAULT_MARGIN_TABLE_ROW * i}, getColorForRow(i, row.header), getRadiusForRow(i, FIRST, LAST));
        addColumnForRow(row, options.DEFAULT_MARGIN + options.DEFAULT_MARGIN_TABLE_ROW * i, getColorForTextRow(row.header));
    }    
}


export default addTable;