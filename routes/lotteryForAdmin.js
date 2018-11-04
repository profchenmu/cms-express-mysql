const express = require('express');
const router = express.Router();
const $lotteryForAdmin = require('../sql').$lotteryForAdmin;
const bcrypt = require('bcrypt-nodejs');

// router.get('/', function(req, res, next) {
//   res.render('users');
// });

router.get('/list', function(req, res, next) {
  global.pool.getConnection((err, connection) => {
    connection.query($lotteryForAdmin.queryAll, null, (err, result) => {

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

router.get('/detail/:id', (req, res, next) => {
  global.pool.getConnection((err, connection) => {
    const id = req.params.id;
    connection.query($lotteryForAdmin.queryById, [id], (err, result) => {
      if (err) {
        console.log(err)
        return false;
      }
      const resData = {
        msg: 'successful',
        code: 1,
        data: result
      };
      res.json(resData);
      connection.release();
    });
  });


  // console.log(req.params.id);
  // const resData = {
  //   msg: 'successful',
  //   code: 1,
  // };
  // res.json(resData);
});

router.put('/edit/:id', function(req, res, next) {
  console.log(req.params.id);
  const sendData = {
    rewardAccount: 1,
    name: "test",
    openType: 1,
    countForType: 2,
    lotteryOrder: 2,
    sponcerDesc: "aaaaaa",
    sponcerName: "aaaaa",
    sponcerId: 1,
    startTime: '2018-10-31 00:34:05',
    endTime: '2018-11-30 00:34:12',
    imgUrl: 'http://aa.bb.com/foo/bar.jpg',
  }
  const id = req.params.id;
  const data = Object.values(sendData).push(id);

  global.pool.getConnection((err, connection) => {
    connection.query($lotteryForAdmin.update, data, (error, result) => {
      if (error || err) {
        console.log(error, err)
        return false;
      }
      const resData = {
        msg: 'successful',
        code: 1,
      };
      connection.release();
      res.json(resData);
    });
  });

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
        lotteryAccount: 1,
        name: "test",
        openType: 1,
        countForType: 2,
        lotteryOrder: 2,
        sponcerDesc: "aaaaaa",
        sponcerName: "aaaaa",
        sponcerId: 1,
        startTime: '2018-10-31 00:34:05',
        endTime: '2018-11-30 00:34:12',
        imgUrl: 'http://aa.bb.com/foo/bar.jpg',
      }
      
      const data = setData;
      connection.query($lotteryForAdmin.insert, [
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

router.post('/add', function(req, res, next) {
  const sendData = {
    rewardAccount: 1,
    name: "test",
    openType: 1,
    countForType: 2,
    lotteryOrder: 2,
    sponcerDesc: "aaaaaa",
    sponcerName: "aaaaa",
    sponcerId: 1,
    startTime: '2018-10-31 00:34:05',
    endTime: '2018-11-30 00:34:12',
    imgUrl: 'http://aa.bb.com/foo/bar.jpg',
    isPublic: true,
  }
  const data = Object.values(sendData);
  console.log(data);
  global.pool.getConnection((err, connection) => {
    connection.query($lotteryForAdmin.insert, data, (error, result) => {
      if (error || err) {
        console.log(error, err)
        return false;
      }
      const resData = {
        msg: 'successful',
        code: 1,
      };
      connection.release();
      res.json(resData);
    });
  });
});

module.exports = router;
