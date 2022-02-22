const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, data)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(data);
        })
    }else if(req.url === '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(data);
        })
    }else if(req.url === '/api/users'){
        const users = [
            {name:"Bob", age: 40},
            {name:"John", age: 30}
        ]

        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(users));
    }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
})