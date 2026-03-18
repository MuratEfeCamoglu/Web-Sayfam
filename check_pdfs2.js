const fs = require('fs');
const PDFParser = require('pdf2json');

const files = [
  'public/UC-633fe862-f6a1-41df-a9c1-4ad211298af4.pdf',
  'public/UC-a332609f-05a3-47dd-a295-4214ebe663f8.pdf',
  'public/UC-e5351813-d508-42b4-ab3a-5ae75cc5d143.pdf'
];

files.forEach(file => {
  const pdfParser = new PDFParser(this, 1);
  pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
  pdfParser.on("pdfParser_dataReady", pdfData => {
    const rawText = pdfParser.getRawTextContent().replace(/\r\n/g, " ");
    console.log(`\n--- ${file} ---`);
    if (rawText.includes('Dart and Flutter') || rawText.includes('Ultimate')) {
      console.log('=> MATCH: Dart and Flutter: The Ultimate Mobile App Development Course');
    } else if (rawText.includes('Beginner') || rawText.includes('Ease')) {
      console.log('=> MATCH: Flutter for Beginners');
    } else if (rawText.includes('Version Console') || rawText.includes('Git') || rawText.includes('Version Control')) {
      console.log('=> MATCH: Version Control');
    } else {
      console.log('=> UNKNOWN:', rawText.substring(0, 150));
    }
  });
  pdfParser.loadPDF(file);
});
