const path = require('path');

// Directory of flie
console.log(__dirname);  /* OR */ console.log(path.dirname(__filename));

// Directory of flie with filename
console.log(__filename);

// Filename
console.log(path.basename(__filename))

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename)); /* .base .root .dir .ext .name*/

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));