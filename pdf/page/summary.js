import positionsAtMonthLarge from "../components/positionsAtMonthLarge.js";
import positionsAtMonthSmall from "../components/positionsAtMonthSmall.js";
import addLine from "../elements/addLine.js";
import addList from "../elements/addList.js";
import addTitleToPage from "../elements/addTitleToPage.js";


function summary(isLarge) {
    addTitleToPage('Резюме за март');
    isLarge ? positionsAtMonthLarge() : positionsAtMonthSmall();
    addLine({x: 40, y: 490}, {w: 1347, h: 490});
    addList({x: 80, y: 550}, {w: 740, h: 40});
}

export default summary;