module.exports = {
	mysql:{
		host: 'rm-uf6y4phzh7jtg92ue.mysql.rds.aliyuncs.com',
		user: 'root',
		password: '8hOFI1A0jj0BOmsF',
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