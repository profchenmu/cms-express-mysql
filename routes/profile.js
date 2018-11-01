const express = require('express');
const router = express.Router();
const $sql = require('../sql');
const bcrypt = require('bcrypt-nodejs');

// router.get('/', function(req, res, next) {
//   res.render('users');
// });

router.get('/address/detail/:userId', function(req, res, next) {
  console.log(req.params.userId);
  const resData = {
    msg: 'successful',
    code: 1,
    data: {
      name: 'abc',
      phone: '13800000000',
      city: 'shanghai',
      detail: 'shangnan road',
      postCode: '200000',
    }
  };
  res.json(resData);
});

router.post('/address/add/:userId', function(req, res, next) {
  console.log(req.params.userId);
  const setData = {
    userId: req.params.userId,
    name: 'abc',
    phone: '13800000000',
    city: 'shanghai',
    detail: 'shangnan road',
    postCode: '200000',
  }
  const resData = {
    msg: 'successful',
    code: 1,
  };
  res.json(resData);
});

router.put('/address/edit/:userId', function(req, res, next) {
  console.log(req.params.userId);
  const setData = {
    userId: req.params.userId,
    name: 'abc',
    phone: '13800000000',
    city: 'shanghai',
    detail: 'shangnan road',
    postCode: '200000',
  }
  const resData = {
    msg: 'successful',
    code: 1,
  };
  res.json(resData);
});

router.get('/basicAccount/:userId', function(req, res, next) {
  console.log(req.params.userId);
  const resData = {
    msg: 'successful',
    code: 1,
    data: {
      lotteryJoinAccount: 2,
      lotteryStartAccount: 2,
      lotteryGetAccount: 2,
    }
  };
  res.json(resData);
});

module.exports = router;
