const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');
const $sql = require('../sql.js');

const getList = (res) => {
	Todo.find({}, '_id todoName itemDone', function(err, todo){
		console.log(err, todo);
		res.json(todo);
	});
}

router.use('/*', (req, res, next) => {
	console.log('Inside GET /authrequired callback')
  console.log(`User authenticated? ${req.isAuthenticated()}`)
  if (!req.isAuthenticated()) {
    console.log('no login!')
    res.redirect('/login');
  } else {
    console.log('logined');
    next();
  }
})

// router.get('/list', function(req, res, next) {
// 	Todo.find({}, '_id todoName itemDone', function(err, todo){
// 		res.json(todo);
// 	});
// });

router.get('/list', function(req, res, next) {
	global.pool.getConnection((err, connection) => {
		connection.query($sql.queryAll, ['todos'], (err, result) => {
			res.json(result);
			connection.release();
		})
	})
})

router.get('/', function(req, res, next) {
	res.render('index', {
		todoList: [],
		title: 'TODO DEMO'
	});
});

// router.post('/add', function(req, res, next) {
// 	Todo.create(req.body, (err) => {
// 		if(err){
// 			console.log(err);
// 			return;
// 		}
// 		getList(res);
// 	});

// });

router.post('/add', function(req, res, next) {
	global.pool.getConnection((err, connection) => {
    // 获取前台页面传过来的参数
   	let param = req.body;
    // var param = req.query || req.params;

    // 建立连接，向表中插入值
    // 'INSERT INTO post(id, title, content) VALUES(0,?,?)',
    connection.query($sql.insert, ['todos', param.todoName], (err, result) => {
    	console.log(result);
      if(result) {
        result = {
          code: 200,
          msg:'success'
        };
      }

      // 以json形式，把操作结果返回给前台页面
      // let temp = jsonWrite(res, result);
      res.json(result);
      // 释放连接
      connection.release();
    });
  });
});

router.delete('/del', function(req, res, next) {
	Todo.findOneAndRemove(
		{_id: req.body._id},
		{select: '_id todoName update'},
		function(err, todo){
			res.json(todo);
		}
	);
});

router.put('/itemname', function(req, res, next) {
	console.log(req.body);
	Todo.update(
		{_id: req.body._id},
		{
			$set: {
				update: Date.now(),
				todoName: req.body.todoname
			}
		},function(err, todo){
			res.json({cao: 'cao2'});
		}
	)
});

router.put('/itemdone', function(req, res, next) {
	console.log(req.body);
	Todo.update(
		{_id: req.body._id},
		{
			$set: {
				update: Date.now(),
				itemDone: req.body.itemdone
			}
		},function(err, todo){
			res.json({cao: 'cao3'});
		}
	)
});

module.exports = router;
