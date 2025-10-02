const express =  require('express');

const router = express.Router();

router.get('/', (req, res)=> {
    res.send("Hello User");
});

//router.get('/:id',) //추가적으로 필요한 내용을 받을 수 있음

module.exports=router;