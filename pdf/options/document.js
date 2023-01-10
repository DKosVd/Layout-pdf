import PDFDocument from 'pdfkit';
import fs from 'fs';
import getFont from './fonts.js';


// Create a document 254 200
const doc = new PDFDocument({size: [254, 200], pdfVersion: '1.7'});

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf', 'utf-8'));

doc.font(getFont('semiLight'));

export default doc;