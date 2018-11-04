const $lotteryForAdmin = {
  insert:'INSERT INTO lotteryForAdmin (rewardAccount, name, openType, countForType, lotteryOrder, sponcerDesc, sponcerName, sponcerId, startTime, endTime, imgUrl) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
  update:'update lotteryForAdmin set rewardAccount=?, name=?, openType=?, countForType=?, lotteryOrder=?, sponcerDesc=?, sponcerName=?, sponcerId=?, startTime=?, endTime=?, imgUrl=?, where lotteryId=?',
  delete: 'delete from ? where id=?',
  queryById: 'select * from lotteryForAdmin where lotteryId=?',
  queryAll: 'select * from lotteryForAdmin',
  queryPasswordByName: 'select * from users where name=?',
  queryPasswordById: 'select * from lotteryForAdmin where lotteryId=?',
  queryByUserIdAndLotteryId: `
    SELECT l.*, u.*
    FROM lotteryForAdmin l
    INNER JOIN ? lu
    ON lu.lotteryId = l.lotteryId
    INNER JOIN user u
    ON u.userId = lu.userId
    WHERE u.userId = ?;
  `,
  countByUserIdAndLotteryId: `
    SELECT COUNT(userId) AS ? FROM ? WHERE userId = ?;
  `,
};

const $lotteryForWx = {
  insert:'INSERT INTO lottery (name, sponcerId, status, openType, startTime, endTime, imgUrl) VALUES (?,?,?,?,?,?,?)',
  update:'update ? set done=? where todoName=?',
  delete: 'delete from ? where id=?',
  queryById: 'select * from ? where id=?',
  queryAll: 'select * from lottery',
  queryPasswordByName: 'select * from users where name=?',
  queryPasswordById: 'select * from users where id=?',
  queryByUserIdAndLotteryId: `
    SELECT l.*, u.*
    FROM lottery l
    INNER JOIN ? lu
    ON lu.lotteryId = l.lotteryId
    INNER JOIN user u
    ON u.userId = lu.userId
    WHERE u.userId = ?;
  `,
  countByUserIdAndLotteryId: `
    SELECT COUNT(userId) AS ? FROM ? WHERE userId = ?;
  `,
  
};

const $post = {
  insert:'INSERT INTO lottery (rewardAccount, name, openType, countForType, lotteryOrder, sponcerDesc, sponcerName, sponcerId, startTime, endTime, imgUrl) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
  update:'update ? set done=? where todoName=?',
  delete: 'delete from ? where id=?',
  queryById: 'select * from ? where id=?',
  queryAll: 'select * from lottery',
  queryPasswordByName: 'select * from users where name=?',
  queryPasswordById: 'select * from users where id=?',
};

module.exports = {
  $lotteryForAdmin,
  $lotteryForWx
}

// rewardAccount: 1,
// name: "test",
// openType: 1,
// countForType: 2,
// lotteryOrder: 2,
// sponcerDesc: "aaaaaa",
// sponcerName: "aaaaa",
// sponcerId: 1,
// startTime: '2018-10-31 00:34:05',
// endTime: '2018-11-30 00:34:12',
// imgUrl: 'http://aa.bb.com/foo/bar.jpg',