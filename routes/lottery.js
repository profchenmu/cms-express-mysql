const express = require('express');
const router = express.Router();
const $sql = require('../sql');
const bcrypt = require('bcrypt-nodejs');

// router.get('/', function(req, res, next) {
//   res.render('users');
// });

router.get('/list', function(req, res, next) {
  const resData = {
    msg: 'successful',
    code: 1,
    data: [{
      lotteryId: '',
      lotteryName: '',
      joinAccount: 0,
      sponcerName: '',
    }]
  };
  res.json(resData);
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
