const express = require('express');
const router = express.Router();
const $sql = require('../sql');
const bcrypt = require('bcrypt-nodejs');

router.get('/', function(req, res, next) {
	res.render('users');
});

router.get('/list', function(req, res, next) {
	global.pool.getConnection((error, connection) => {
		connection.query($sql.queryAll, null, (err, result) => {
			res.json(result);
			connection.release();
		})
	})
});

router.post('/search', (req, res, next) => {
	const data = req.body;
	global.pool.getConnection((error, connection) => {
		connection.query($sql.queryPasswordByName, [data.name], (err, result) => {
			console.log(err);
			res.json(result);
			connection.release();
		})
	})
})

router.post('/add', function(req, res, next) {
	global.pool.getConnection((err, connection) => {
		const data = req.body;
		bcrypt.hash(data.password, null, null, (err, password) => {
			connection.query($sql.insert, [data.name, password, data.type], (error, result) => {
				console.log(err, error);
				res.json(result);
				connection.release();
			});
		});
	})
});

module.exports = router;
