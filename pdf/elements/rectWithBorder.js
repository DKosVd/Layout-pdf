import doc from "../options/document.js"
import options from "../options/options.js";


function rectWithBorder() {
    const x = 10;
    const y = 10;
    const width = 40;
    const height = 20;

    doc.lineCap('round')
        .moveTo(x, y)
        .lineTo(x + width, y)
        .lineTo(x + width, y + height)
        .lineTo(x, y + height)
        .lineTo(x, y)
        .stroke()
}   

export default rectWithBorder;
