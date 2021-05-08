
const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users_controller');

router.get('/',(req,res)=>{
    return res.render('home');
});

router.get('/signup',(req,res)=>{
    return res.render('signup');
});
router.get('/signin',(req,res)=>{
    return res.render('signin');
});

router.post('/signin',passport.authenticate('local',{
    failureRedirect:'/signin',
}),userController.signin);

//router.post('/signin',passport.checkAuthentication,userController.signin);
router.post('/signup',userController.signup);

router.get('/profile',(req,res)=>{
    return res.render('profile'); 
})



module.exports = router;