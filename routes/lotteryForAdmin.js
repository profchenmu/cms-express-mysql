const express = require('express');
const router = express.Router();
const $sql = require('../sql');
const bcrypt = require('bcrypt-nodejs');

// router.get('/', function(req, res, next) {
//   res.render('users');
// });

router.get('/list', function(req, res, next) {
  global.pool.getConnection((err, connection) => {
    connection.query($sql.queryAll, null, (err, result) => {
      console.log(result.startTime);
      const resData = {
        msg: 'successful',
        code: 1,
        data: result
      };
      res.json(resData);
      connection.release();
    });
  })
  // const resData = {
  //   msg: 'successful',
  //   code: 1,
  //   data: [{
  //     lotteryId: '',
  //     lotteryName: '',
  //     joinAccount: 0,
  //     sponcerName: '',
  //   }]
  // };
  // res.json(resData);
});

router.get('/banner', function(req, res, next) {
  const resData = {
    msg: 'successful',
    code: 1,
    data: [{
      lotteryId: '',
      lotteryName: '',
      joinAccount: 0,
      bannerImg: '',
      sponcerName: '',
    }]
  };
  res.json(resData);
});

router.get('/:id', (req, res, next) => {
  console.log(req.params.id);
  const resData = {
    msg: 'successful',
    code: 1,
  };
  res.json(resData);
});

router.put('/edit/:id', function(req, res, next) {
  console.log(req.params.id);
  const setData = {
    lotteryId: req.params.id,
    lotteryName: 'lotteryName',
    account: 2,
    openType: 1, // 1 | 2 | 3
    startTime: '2019-01-01 01:00:00',
    img: '',
  }
  const resData = {
    msg: 'successful',
    code: 1,
  };
  res.json(resData);
});


router.post('/addMock', function(req, res, next) {
  global.pool.getConnection((err, connection) => {
    for (let i=0; i<10; i++) {
      const setData = {
        name: 'test'+i,
        sponcerId: 1+i,
        status:1,
        openType:1,
        startTime: '2018-10-31 00:34:05',
        endTime: '2018-11-30 00:34:12',
        imgUrl: 'http://aa.bb.com/foo/bar.jpg'
      }
      
      const data = setData;
      connection.query($sql.insert, [
          data.name, 
          data.sponcerId, 
          data.status, 
          data.openType, 
          data.startTime, 
          data.endTime, 
          data.imgUrl
        ], (error, result) => {
        console.log(error, err)
        if (error || err) {
          return false;
        }
      });
    }
    connection.release();
    res.json({
      msg: 'successful',
      code: 1,
    });
  })
  
  // const resData = {
  //   msg: 'successful',
  //   code: 1,
  // };
  // res.json(resData);
});

router.post('/add', function(req, res, next) {
  const setData = {
    lotteryName: 'lotteryName',
    account: 2,
    openType: 1, // 1 | 2 | 3
    startTime: '2019-01-01 01:00:00',
    img: '',
  }
  const resData = {
    msg: 'successful',
    code: 1,
  };
  res.json(resData);
});

module.exports = router;
