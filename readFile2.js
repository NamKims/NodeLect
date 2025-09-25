const fs = require('fs').promises;      //프로미스 방식 (p60)


fs.readFile('./readme.txt')
    .then((data) => {  
    //    console.log(data);              
        console.log(data.toString());   
        return fs.writeFile('./readme.txt', '잘 읽었습니다.');
    })
    .then(()=> {
        return fs.readFile('./readme.txt');
    })

    .then((data) => {  
        console.log(data.toString());   
    })

    .catch((err)=> {
        console.log(err);
    });