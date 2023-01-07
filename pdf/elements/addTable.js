import doc from "../options/document.js"
import options from "../options/options.js";


function addRow(position, color, r = 0) {
    const {x, y} = position;
    doc.roundedRect(x / options.RATIOWIDTH, y / options.RATIOHEIGHT, options.WIDTH - (2 * x / options.RATIOWIDTH), 100 / options.RATIOHEIGHT, r / options.RATIOWIDTH)
        .fillAndStroke(color, '#cccccc') 
        // .fill(color)
        .stroke()
}

function addTable(position, rows = {}) {

    const {td, th} = rows;
    addRow(position, '#3E2E88', 14)
    addRow({x: 40, y: 120}, '#ffffff')
    addRow({x: 40, y: 220}, '#F7F5FF')
    addRow({x: 40, y: 320}, '#ffffff')
    addRow({x: 40, y: 420}, '#F7F5FF')
}


export default addTable;