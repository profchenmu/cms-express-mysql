module.exports = {
	mysql:{
		host: '127.0.0.1',
		user: 'root',
		password: '02123607',
		database: 'lottery',
		port: 3306
	}
};

// SELECT l.*, u.*
// FROM lottery l
// INNER JOIN lotteryGet lu
// ON lu.lotteryId = l.lotteryId
// INNER JOIN user u
// ON u.userId = lu.userId;