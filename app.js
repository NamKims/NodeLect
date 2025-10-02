const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user.js');


dotenv.config();                    //process.env에 저장됨
const app = express();


app.set('port', process.env.PORT || 3000); //먼저 env.port를 쓰고 안되면 3000쓰세요 느낌
app.use((req, res, next)=>{         //next는 매개변수로 활동
    console.log('모든 요청에 모두 실행됩니다.');
    next();                         //다음단계로 넘어간다
}) 

app.use(morgan('dev'));

app.use('/', indexRouter);
app.use('/user', userRouter);
/*
app.get('/about', (req, res)=> {
    //res.send('Hello, World');
    res.sendFile(path.join(__dirname, './index.html')); // /과 /about에 따라 사이트가 다른걸로 들어가짐
    //next();
});
*/

app.use((req, res, next) => {
    res.status(404).send('Not Found');
})

app.use((err,req,res,next)=> {
    console.error(err);
    res.status(500).send(err.message);
})



app.listen(app.get('port'), ()=> {
    console.log(app.get('port'), '번 포트에서 대기  중');
});
