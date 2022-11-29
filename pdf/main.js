import addDate from './elements/addDate.js';
import addGraphic from './elements/addGraphic.js';
import addImage from './elements/addImage.js';
import addText from './elements/addText.js';
import addTitleToPage from './elements/addTitleToPage.js';
import addEllipse from './elements/addEllipse.js';
import textCenterOnBackground from './elements/textCenterOnBackground.js';
import textOnRect from './elements/textOnRect.js';
import doc from './options/document.js'
import options from './options/options.js';
import addLine from './elements/addLine.js';
import imageInEllipseWithText from './components/imageInEllipseWithText.js';
import bonusPage from './page/bonus.js';
import graphic from './page/graphic.js';
import first from './page/first.js'
import title from './page/title.js'
import addList from './elements/addList.js';
import rectWithBorder from './elements/rectWithBorder.js';
import positionsAtMonthLarge from './components/positionsAtMonthLarge.js';
import summary from './page/summary.js';
import positionsAtMonthSmall from './components/positionsAtMonthSmall.js';
import resultWithNumberAndImage from './components/resultWithNumberAndImage.js';
import imageWithText from './components/imageWIthText.js';
// Add another page
// Draw a rectangle with text


// doc.image('images/appbooster.jpg', Math.floor(40 / options.RATIOWIDTH), Math.floor(253 / options.RATIOHEIGHT), {width: Math.floor(250 / options.RATIOWIDTH)})

function main() {

    // first();
    // doc.addPage();
    // graphic();
    // doc.addPage();
    // title('Главные результаты марта')
    // doc.addPage();
    // bonusPage();
    // doc.addPage();
    // addList({x: 78, y: 615}, {w: 720, h: 40});
    // rectWithBorder();

    // summary(false);

    // resultWithNumberAndImage();

    imageWithText(972, 190);

    doc.end();
}

main();

export default main;


// addImage('appbooster.jpg', {x: 40, y: 253}, {w: 250, h: 50});
// addImage('close.png', {x:318, y:271}, {w: 18, h: 18})
// addImage('lz.png', { x:360, y:251 }, { w: 251, h: 55 })
// addText('Отчёт о поисковом продвижении',{x: 40, y: 343}, {w: 700}, 70, '3E2E88')
// textOnRect('appbooster.com', { x: 40, y: 613 }, { w: 418, h: 83 }, 35);
// addDate();
// doc.addPage();
// addTitleToPage('Поисковой трафик за 3 месяца');

// doc.rotate(30)
// addImage('arrow.png', { x:710, y:-300}, { w: 600, h: 900 })
// textCenterOnBackground("О ТРАФИКЕ НА ГРАФИКЕ")
// textCenterOnBackground("ГЛАВНЫЕ РЕЗУЛЬТАТЫ МАРТА")
// textCenterOnBackground("ПОЗИЦИИ В ТАБЛИЦАХ")
// textCenterOnBackground("ЧТО МЫ СДЕЛАЛИ")
// textCenterOnBackground("ЧТО БУДЕТ ДАЛЬШЕ")




// Apply some transforms and render an SVG path with the 'even-odd' fill rule
// doc
//   .scale(0.6)
//   .translate(470, -380)
//   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
//   .fill('red', 'even-odd')
//   .restore();

// Add some text with annotations
// doc
//   .addPage()
//   .fillColor('blue')
//   .text('Here is a link!', 100, 100)
//   .underline(100, 100, 160, 27, { color: '#0000FF' })
//   .link(100, 100, 160, 27, 'http://google.com/');

// Finalize PDF file
