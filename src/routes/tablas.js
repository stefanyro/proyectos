const express = require('express');
const router = express.Router();
const pool = require('../database')



router.get('/primera',(req,res) => {
    res.render('tablas/primera')

    //res.redirect('/tablas/segunda');
}); 

router.get('/segunda',(req,res) => {
    res.render('tablas/segunda')

    //res.redirect('/tablas/tercera');
});

router.get('/tercera',(req,res) => {
    res.render('tablas/tercera')
});

router.get('/factorial',(req,res) => {
    res.render('tablas/factorial')
});

router.get('/calculadora',(req,res) => {
    res.render('tablas/calculadora')
});

module.exports=router;

