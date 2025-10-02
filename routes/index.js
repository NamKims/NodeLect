//서버를 만들려는 것이 아닌, 서버 안쪽에 있는 라우터를 만들려고 하는거임.
const express = require('express');
const router = express.Router(); //라우터를 만들어야함
const path = require('path');

router.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../ex/restFront.html'));
});

router.get('/about', (req, res)=> {
    res.sendFile(path.join(__dirname, '../index.html'));
});



//여담
router.post()
router.delete()


module.exports = router;
