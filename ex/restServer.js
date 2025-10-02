const http = require('http');
const fs = require('fs').promises;


//8080
const host1 = http.createServer(async (req, res)=> {    //await을 사용하면 async가 항상 붙어야함
    const data = await fs.readFile('./server2.html');
    try{
        if(req.method === 'GET') {

        } else if(req.method === 'POST') {
            
        } else if(req.method === 'PUT') {
            
        } else if(req.method === 'DELETE') {

        } else {
            res.writeHead(400);
            return res.end('Not Found...')    
        }
        
        res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
        res.write('<h2>나의 서버1 (8080포트)</h2>');
        res.end(data);
    } catch(error) {
        console.error(error);
        res.writeHead(500, {'Content-type':'text/html; charset=utf-8'});
        res.end(error.message);
    }
})

host1.listen(8080);

host1.on('listening', () => {
    console.log('8080번 포트에서 서버 대기중 입니다.');
})

host1.on('error', (error) => {
    console.error(error);
});