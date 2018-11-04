const express = require('express');
const router = express.Router();
const $lotteryForWx = require('../sql');
const bcrypt = require('bcrypt-nodejs');

// router.get('/', function(req, res, next) {
//   res.render('users');
// });

router.get('/lotteryGet/:userId', function(req, res, next) {
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
  const data = ['lotteryGet', req.params.userId];
  global.pool.getConnection((err, connection) => {
    connection.query($lotteryForWx.queryByUserIdAndLotteryId, data, (err, result) => {
      const resData = {
        msg: 'successful',
        code: 1,
        data: result
      };
      res.json(resData);
      connection.release();
    });
  })
});

router.get('/lotteryStart/:userId', function(req, res, next) {
  const data = ['lotteryStart', req.params.userId];
  global.pool.getConnection((err, connection) => {
    connection.query($lotteryForAdmin.queryByUserIdAndLotteryId, data, (err, result) => {
      const resData = {
        msg: 'successful',
        code: 1,
        data: result
      };
      res.json(resData);
      connection.release();
    });
  })
});

router.post('/join', function(req, res, next) {
  const data = ['lotteryJoin', req.params.userId];
  global.pool.getConnection((err, connection) => {
    connection.query($lotteryForAdmin.queryByUserIdAndLotteryId, data, (err, result) => {
      const resData = {
        msg: 'successful',
        code: 1,
        data: result
      };
      res.json(resData);
      connection.release();
    });
  })
});

router.get('/lotteryJoin/:userId', function(req, res, next) {
  const data = ['lotteryJoin', req.params.userId, '*'];
  global.pool.getConnection((err, connection) => {
    connection.query($lotteryForAdmin.queryByUserIdAndLotteryId, data, (err, result) => {
      const resData = {
        msg: 'successful',
        code: 1,
        data: result
      };
      res.json(resData);
      connection.release();
    });
  })
});

router.get('/lotteryGet/:userId', function(req, res, next) {
  const data = ['lotteryJoin', req.params.userId, '*'];
  global.pool.getConnection((err, connection) => {
    connection.query($lotteryForAdmin.queryByUserIdAndLotteryId, data, (err, result) => {
      const resData = {
        msg: 'successful',
        code: 1,
        data: result
      };
      res.json(resData);
      connection.release();
    });
  })
});

router.get('/lotteryStart/:userId', function(req, res, next) {
  const data = ['lotteryJoin', req.params.userId, '*'];
  global.pool.getConnection((err, connection) => {
    connection.query($lotteryForAdmin.queryByUserIdAndLotteryId, data, (err, result) => {
      const resData = {
        msg: 'successful',
        code: 1,
        data: result
      };
      res.json(resData);
      connection.release();
    });
  })
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
    startTime: "2019-01-01 01:00:00",
    img: ""
  }
  const resData = {
    msg: 'successful',
    code: 1,
  };
  res.json(resData);
});

router.post('/add', function(req, res, next) {
  const setData = {
    lotteryName: 'lotteryName',
    account: 2,
    openType: 1, // 1 | 2 | 3
    startTime: "2019-01-01 01:00:00",
    img: ""
  }
  const resData = {
    msg: 'successful',
    code: 1,
  };
  res.json(resData);
});

module.exports = router;
