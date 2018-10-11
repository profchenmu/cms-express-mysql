const post = {
  insert:'INSERT INTO users (name, password, type) VALUES (?,?,?)',
  update:'update ? set done=? where todoName=?',
  delete: 'delete from ? where id=?',
  queryById: 'select * from ? where id=?',
  queryAll: 'select * from users',
  queryPasswordByName: 'select * from users where name=?',
  queryPasswordById: 'select * from users where id=?',
};

module.exports = post;