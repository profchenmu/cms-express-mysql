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
  const data = ['lotteryGetAccount', 'lotteryGet', req.params.userId];
  const resData = {};
  global.pool.getConnection((err, connection) => {
    connection.query($lotteryForAdmin.countByUserIdAndLotteryId, data, (error, result) => {
      if (error || err) {
        console.log(error, err)
        return false;
      }
      resData.lotteryGetAccount = result.lotteryGetAccount;
      const data2 = ['lotteryStartAccount', 'lotteryStart', req.params.userId];
      connection.query($lotteryForAdmin.countByUserIdAndLotteryId, data2, (error, result) => {
        if (error || err) {
          console.log(error, err)
          return false;
        }
        resData.lotteryStartAccount = result.lotteryStartAccount;
        const data3 = ['lotteryJoinAccount', 'lotteryJoin', req.params.userId];
        connection.query($lotteryForAdmin.countByUserIdAndLotteryId, data2, (error, result) => {
          if (error || err) {
            console.log(error, err)
            return false;
          }
          resData.lotteryJoinAccount = result.lotteryJoinAccount;
          connection.release();
          res.json(resData);
        });
      });
    });
  });
  // const resData = {
  //   msg: 'successful',
  //   code: 1,
  //   data: {
  //     lotteryJoinAccount: 2,
  //     lotteryStartAccount: 2,
  //     lotteryGetAccount: 2,
  //   }
  // };
  // res.json(resData);
});

module.exports = router;
