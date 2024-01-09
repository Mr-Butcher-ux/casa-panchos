const express = require('express');
const router = express.Router();
const Contact = require('./models/contact');
const register = require('./models/register');
const { create } = require('./models/secret');
const secret = require('./models/secret');
const Recipe = require('./models/secret');
const Register = require('./models/register');
const Login = require('./models/login');


router.get('/',(req, res) => {
    res.render('index')
})

router.get('/contact',(req, res) => {
    res.render('contact')
})

router.get('/recipes',(req, res) => {
    res.render('recipes')
})
router.get('/salsas',(req, res) => {
    res.render('salsas')
})
router.get('/drinks',(req, res) => {
    res.render('drinks')
})
router.get('/meat',(req, res) => {
    res.render('meat')
})

router.get('/share',(req, res) => {
    res.render('share')
})

router.get('/shop',(req, res) => {
    res.render('shop')
})

router.get('/secret',(req, res) => {
    res.render('secret')
})

router.get('/try',(req, res) => {
    res.render('try')
})

router.post('/submitContact', (req, res) => {
    const contact = new Contact ({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        company:req.body.company,
        reason:req.body.reason,
        comment: req.body.comment
    });

    Contact.collection.insertOne(contact)
    .then(result => {
        res.render('contact')
    })
    .catch(err => console.log(err));
})

router.post('/submitRecipe', (req, res) => {
    const secret = new Recipe ({
        rname: req.body.rname,
        time: req.body.time,
       
        difficulty:req.body.difficulty,
        kind:req.body.reason,
        comment: req.body.comment,
        file: req.body.file
    });

    Recipe.collection.insertOne(secret)
    .then(result => {
        res.render('secret')
    })
    .catch(err => console.log(err));
})


router.post('/submitRegister', (req, res) => {
    const share = new register ({
        fnam: req.body.fnam,
        lnam: req.body.lnam,
        mail: req.body.mail,
        password:req.body.password,
        
    });
    
    Register.collection.insertOne(share)
    .then(result => {
        res.render('share')
    })
    .catch(err => console.log(err));
})

router.get('/submitLogin', (req, res) => {
    const share =  new Register ({
        
        mail: req.body.mail,
        password:req.body.password,
        
    });
    
    Register.collection.findOne(share)
    .then(result => {
        res.render('secret')
    })
    .catch(err => console.log(err));
})


 


module.exports = router;



