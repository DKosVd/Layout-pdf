import imageInCirlce from "../components/imageInCircle.js";
import textInEllipse from "../components/textInEllipse.js";
import addText from "../elements/addText.js";


//If write text to center we need change start position
//Start position it's center of shape
function briefSummary() {
    textInEllipse({x: 200, y: 230},
        {width: 1020, height: 415, color: '#ffffff', colorBorder: '#B2A5EE'}, 
        {width: 1200, height: 415, align: 'center', text: 'Дед мороз и снегурочка на дом', fontSize: 50, colorText: '3E2E88'}
       );
    imageInCirlce({x: 70, y: 150}, {w: 300, h: 260});
    textInEllipse({x: 1160, y: 310},
        {width: 170, height: 130, color: '#FF7D1D', colorBorder: '#FF7D1D'}, 
        {width: 170, height: 130, colorText: 'ffffff', fontSize: 40, align: 'center', text: 'NEW'})
    addText('Проработали, создали и опубликовали новых страниц в прошлом месяце', {x: 370, y: 650}, {w: 700, h: 90}, 25, '000000', 'center');
}

export default briefSummary;