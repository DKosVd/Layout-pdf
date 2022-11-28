import doc from "../options/document.js"
import options from "../options/options.js";

function textCenterOnBackground(text) {
    doc.rect(0, 0, options.WIDTH, options.HEIGHT)
        .fillAndStroke('#3E2E88;', '#fffffff')
        .fill('#fffffff').stroke()
        .fontSize(options.FONTSIZE)
        .text(text, doc.x, doc.y, {
            width: Math.floor(options.WIDTH / 2)
        })
}

export default textCenterOnBackground;