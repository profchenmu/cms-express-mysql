const post = {
  insert:'INSERT INTO lottery (name, sponcerId, status, openType, startTime, endTime, imgUrl) VALUES (?,?,?,?,?,?,?)',
  update:'update ? set done=? where todoName=?',
  delete: 'delete from ? where id=?',
  queryById: 'select * from ? where id=?',
  queryAll: 'select * from lottery',
  queryPasswordByName: 'select * from users where name=?',
  queryPasswordById: 'select * from users where id=?',
};

module.exports = post;