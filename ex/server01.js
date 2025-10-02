const http = require('http');
const fs = require('fs').promises;


//8080
const host1 = http.createServer(async (req, res)=> {    //await을 사용하면 async가 항상 붙어야함
    const data = await fs.readFile('./server2.html');
    try{
        res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
        res.write('<h2>나의 서버1 (8080포트)</h2>');
        res.end(data);
    } catch(error) {
        console.error(error);
        res.writeHead(500, {'Content-type':'text/html; charset=utf-8'});
        res.end(error.message);
    }
})

//8081
const host2 = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
    res.write('<h2>나의 서버2 (8081포트)</h2>');
    res.end('<p>반가워요!</p>');
})

host1.listen(8080);
host2.listen(8081);

host1.on('listening', () => {
    console.log('8080번 포트에서 서버 대기중 입니다.');
})

host2.on('listening', () => {
    console.log('8081번 포트에서 서버 대기중 입니다.');
})

host1.on('error', (error) => {
    console.error(error);
});

host2.on('error', (error) => {
    console.error(error);
});

//미션 : 8081 포트로 바꿔보기
//8080서버와 8081서버를 하나의 코드로동시에 열어보기