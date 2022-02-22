const url = require('url');

const MyUrl = new URL('https://mywebsite.com:80/hello.html?id=100&status=active');

// Serialized MyUrl
console.log(MyUrl.href)
console.log(MyUrl.toString())

//Protocol
console.log(MyUrl.protocol)

//Host
console.log(MyUrl.host)

//Port
console.log(MyUrl.port)

//Hostname
console.log(MyUrl.hostname)

//Pathname
console.log(MyUrl.pathname);

// Serialized query
console.log(MyUrl.search)

// params object
console.log(MyUrl.searchParams);

// Add params
MyUrl.searchParams.append('abc', '123');
console.log(MyUrl.searchParams);

MyUrl.searchParams.forEach((value, name)=> console.log(`${name}:${value}`))