import addImage from "../elements/addImage.js";
import addTitleToPage from "../elements/addTitleToPage.js";


function titleWithLogo(text) {
    text && addTitleToPage(text);
    addImage('lz.png', {x: 1160, y: 40}, {w: 250, h: 45});
}

export default titleWithLogo;