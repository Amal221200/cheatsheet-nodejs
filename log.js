const Logger = require('./logger');
const path = require('path');
const fs = require('fs');

const logger = new Logger();

logger.on('message', (data)=> {
    fs.appendFile(path.join(__dirname, 'log', 'logdata.txt'), JSON.stringify(data), (err)=>{
        if(err) throw err;
    })
});

logger.log("Hello World")