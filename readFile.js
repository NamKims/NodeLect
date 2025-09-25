const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {    //(2개 타입이 들어감(콜백함수 등록해줘야함)) err, data라는 인자
    if (err) {                      //에러 처리 (에러는 시작하자마자 처리해야함 ★)
        throw err;
    }
    console.log(data);              //
    console.log(data.toString());   //
})