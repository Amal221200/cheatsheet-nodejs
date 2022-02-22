const fs = require('fs');
const path = require('path');

// Creating a dir
// fs.mkdir(path.join(__dirname, 'test'), {}, function(err){
//     if (err) throw err;
//     console.log('Folder created...')
// })

// Creating a file 
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), "Hello World", (err)=>{
//     if (err) throw err;
//     console.log('File created...');

//     // Adding content in the file
//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' I am Batman', (err)=>{
//         if (err) throw err;
//         console.log('Content appended...');
//     })
// })

// Reading a file 
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', (err, data)=>{
//     if (err) throw err;

//     console.log(data);
// })

// Rename a file
// fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloWorld.txt'), (err) =>{
//     if (err) throw err;

//     console.log('File Renamed')
// })