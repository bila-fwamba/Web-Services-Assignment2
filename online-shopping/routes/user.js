var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/userprofile', isLoggedIn, function(req, res, next){
    res.render('user/userprofile');
});

router.get('/logout', isLoggedIn, function (req, res, next){
	req.logout();
	res.redirect('/');
});

//route.use('/', notLoggedIn, function (req, res, next){
//	next();
//});

router.get('/signup', function(req, res, next){
	     var messages = req.flash('error');
   res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signup', passport.authenticate('local.signup' , {
	successRedirect: '/user/userprofile',
	failureRedirect: '/user/signup',
	failureFlash: true
}));



router.get('/signin', function(req, res, next){
	 var messages = req.flash('error');
   res.render('/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signin', passport.authenticate('local.signin',{
         successRedirect: '/user/userprofile',
	     failureRedirect: '/user/signin',
	     failureFlash: true
}));

module.exports = router;
//add a new fuction to allow only users that are logged in 
function isLoggedIn(req, res, next){
	if (req.isAuthenticated()){
		return next();
	}
	res.redirect('/');
}

function notLoggedIn(req, res, next){
	if(!req.isAuthenticated()){
		return next();
	}
	res.redirect('/');
}
