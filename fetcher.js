const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

const url = process.argv[0];
const path = process.argv[1];

request(url, function(error, response, body) { 
  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode); 

  console.log('body:', body);

  fs.writeFile(path, body,{}, function() {
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
 
});