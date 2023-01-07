import addEllipse from "../elements/addEllipse.js";
import addImage from "../elements/addImage.js";


function imageInCirlce(position, sizes) {
    const {x, y} = position;
    const {w, h} = sizes;
    
    addEllipse({x, y: y + 90}, {w:w, h:h * 0.8});
    addImage('wallet.png', {x: x + (w / 2) - w * 0.25, y: y + h * 0.3}, {w: w / 2, h:h * 0.8 / 2 })
}

export default imageInCirlce;