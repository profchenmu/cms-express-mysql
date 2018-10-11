const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const axios = require('axios');
const bcrypt = require('bcrypt-nodejs');
const $sql = require('../sql');

// configure passport.js to use the local strategy
passport.use(new LocalStrategy(
  { usernameField: 'name' },
  (name, password, done) => {
  	global.pool.getConnection((error, connection) => {
			connection.query($sql.queryPasswordByName, [name], (err, result) => {
				if (!result||result.length < 1) {
	        return done(null, false, { message: 'Invalid name! \n' });
	      }
	      const user = result[0];
				if (!bcrypt.compareSync(password, user.password)) {
	        return done(null, false, { message: 'Invalid password! \n' });
	      }
	      connection.release();
	      console.log(user, 'user');
	      return done(null, user);
			})
		})


    // axios.get(`http://localhost:5000/users?email=${email}`)
    // .then(res => {
    //   const user = res.data[0]
    //   if (!user) {
    //     return done(null, false, { message: 'Invalid credentials.\n' });
    //   }
    //   if (!bcrypt.compareSync(password, user.password)) {
    //     return done(null, false, { message: 'Invalid credentials.\n' });
    //   }
    //   return done(null, user);
    // })
    // .catch(error => done(error));
  }
));

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
  console.log('Inside serializeUser callback. User id is save to the session file store here')
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
	global.pool.getConnection((error, connection) => {
		connection.query($sql.queryPasswordById, [id], (err, result) => {
			if (!result||result.length < 1) {
        return done(null, false, { message: 'Invalid credentials.\n' });
      }
      const user = result[0];
      connection.release();
      return done(null, user);
		})
	});
});

router.get('/', function(req, res, next) {
	console.log('aaaaa');
  res.render('login');
});

// router.get('/', (req, res) => {
//   console.log('Inside GET /authrequired callback')
//   console.log(`User authenticated? ${req.isAuthenticated()}`)
//   if(req.isAuthenticated()) {
//     res.send('you hit the authentication endpoint\n')
//     // res.render('login');
//   } else {
//    // res.send('no login!')
//   	res.render('login');
//   }
// })

router.post('/', function(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if(info) {return res.send(info.message)}
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.login(user, (err) => {
      if (err) { return next(err); }
      // return res.send('You were authenticated & logged in!\n');
      return res.redirect('/users');
    })
  })(req, res, next);
});

module.exports = router;
