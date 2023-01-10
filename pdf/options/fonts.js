import {resolve} from 'path';
import options from './options.js';

const PATH = `./fonts/${options.FONT_FAMILY}/`;

const fonts = {
    italic: 'Italic',
    bold: 'Bold',
    extraBold: 'ExtraBold',
    light: 'Light',
    extraLight: 'ExtraLight',
    semiLight: 'SemiLight',
    default: 'Regular'
}

function getFont(type) {
    if(fonts.hasOwnProperty(type)) {
        return resolve(PATH + `${options.FONT_FAMILY}-${fonts[type]}.ttf`)
    }
    return resolve(PATH + `${options.FONT_FAMILY}-${fonts['default']}.ttf`)
}

export default getFont;