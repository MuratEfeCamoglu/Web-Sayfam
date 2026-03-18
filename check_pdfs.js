const fs = require('fs');
const pdf = require('pdf-parse');

const files = [
  'public/UC-633fe862-f6a1-41df-a9c1-4ad211298af4.pdf',
  'public/UC-a332609f-05a3-47dd-a295-4214ebe663f8.pdf',
  'public/UC-e5351813-d508-42b4-ab3a-5ae75cc5d143.pdf'
];

async function checkPdfs() {
  for (const file of files) {
    try {
      const dataBuffer = fs.readFileSync(file);
      const data = await pdf(dataBuffer);
      const text = data.text;
      
      console.log('\n--- FILE:', file, '---');
      if (text.includes('Dart and Flutter') || text.includes('Ultimate')) {
        console.log('=> MATCH: Dart and Flutter: The Ultimate Mobile App Development Course');
      } else if (text.includes('Beginners') || text.includes('Ease')) {
        console.log('=> MATCH: Flutter for Beginners');
      } else if (text.includes('Version') || text.includes('Git')) {
        console.log('=> MATCH: Version Control');
      } else {
        console.log('CONTENT START:', text.replace(/\s+/g, ' ').substring(0, 200));
      }
    } catch (e) {
      console.log('ERROR:', file, e.message);
    }
  }
}

checkPdfs();
