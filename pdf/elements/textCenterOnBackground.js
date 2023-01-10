import doc from "../options/document.js"
import options from "../options/options.js";


function textCenterOnBackground(text, colorBackground =  options.BRIEF_COLOR) {
    doc.rect(0, 0, options.WIDTH, options.HEIGHT)
        .fillAndStroke(colorBackground, '#fffffff')
        .fill('#fffffff').stroke()
        .fontSize(options.FONTSIZE / 1.5)
        .text(text, 0 , (options.HEIGHT - options.DEFAULT_MARGIN) / 2, {
            lineBreak: false,
            width: options.WIDTH,
            height: 80,
            align: 'center'
        })
}

export default textCenterOnBackground;