const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/signupmodel');

router.post('/signup', (req, response) => {
    console.log(req);
    // console.log(req.body.fullName);
    // console.log(req.body.userName);
    // console.log(req.body.email);
    // console.log(req.body.password);
    const signedUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password:req.body.password
    })
    signedUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error);
        });



    
});

//router.get('/sign');

module.exports = router;