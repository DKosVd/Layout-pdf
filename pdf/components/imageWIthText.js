import addEllipse from "../elements/addEllipse.js";
import addImage from "../elements/addImage.js";
import addText from "../elements/addText.js";


//X 324
//Y 148

//2 row
function imageWithText(startX, startY) {
        let newY = startY;
        let newString = 0;

    for(let i = 0; i < 9; i++) {
        //Check row 
        if(newString === 2) {
            newY = newY + 150;
            addEllipse({x: startX,y: newY - 70}, {w: 70, h: 70});
            addImage('wallet.png', {x: startX + 10, y: newY - 60 }, {w: 44, h: 36})
            addText('Мониторинг позиций и трафики', {x: startX, y: newY}, {w: 180, h: 130})
            newString = 0;
        }
        if( (i + 1) % 2 === 0 ) {   //Last element in string 
            addEllipse({x: startX + 320,y: newY - 70}, {w: 70, h: 70});
            addImage('wallet.png', {x: startX + 330, y: newY - 60 }, {w: 44, h: 36})
            addText('Мониторинг позиций и трафики', {x: startX + 320, y: newY}, {w: 180, h: 130})
        } else {
            addEllipse({x: startX,y: newY - 70}, {w: 70, h: 70});
            addImage('wallet.png', {x: startX + 10, y: newY - 60 }, {w: 44, h: 36})
            addText('Мониторинг позиций и трафики', {x: startX, y: newY}, {w: 180, h: 130})
        }
        newString++;
       
    }
}


export default imageWithText;