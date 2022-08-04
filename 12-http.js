const http = require('http');

const server = http.createServer((req,res)=>{
    //req --> incoming request
    //res --> sending back
       // console.log(req);
        if(req.url === "/"){
                res.end('Welcome to home page');
        }


      else if(req.url === "/about"){
               res.end("here is about ");
       }
      else {
                res.end(`<h1>OOps</h1><P>we cannot seem to fins page you are looking for </P><a href="/"/>Back Home`);
        }
});

server.listen(5000);