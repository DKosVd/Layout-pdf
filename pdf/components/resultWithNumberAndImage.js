import doc from "../options/document.js"
import addEllipse from "../elements/addEllipse.js";
import addImage from "../elements/addImage.js";


function resultWithNumberAndImage() {

    addEllipse({x: 194,y: 272}, {w: 1020, h: 414}, '#FFFFFFF', '#B2A5EE');
    
    addEllipse({x: 1100,y: 313}, {w: 166, h: 130}, '#FF7D1D', '#FF7D1D');
   
    addEllipse({x:92, y: 215}, {w: 300, h: 262}, '#E8EBFA');
    addImage('wallet.png', {x: 130, y: 280}, {w: 190, h: 150 })
}

export default resultWithNumberAndImage;