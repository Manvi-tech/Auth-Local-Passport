
const User = require('../models/user');

//when signin form is posted
module.exports.signin= function(req,res){
    
    return res.render('profile');
}

//when signup form is posted
module.exports.signup =async function(req,res){

    if(req.body.password != req.body.confirmPassword){
        return res.redirect('back');
    }

    let user =await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });

    return res.redirect('/signin');
}