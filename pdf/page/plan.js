import imageWithText from "../components/imageWithText.js";
import addLine from "../elements/addLine.js";
import addList from "../elements/addList.js";
import addTitleToPage from "../elements/addTitleToPage.js";


function plan() {
    addTitleToPage('Резюме за март');
    addList({x: 53, y:212}, {w: 785, h: 66});
    addLine({x: 912, y: 141}, {w: 912, h: 800});
    imageWithText({startX: 972, startY: 190});
}

export default plan;