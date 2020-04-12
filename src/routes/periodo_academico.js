const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/consultar',async(req,res)=>{
    const user = await pool.query('select * from periodo_academico')
    res.render('periodo_academico/consultar',{user});
});

router.get('/agregar',async(req,res)=>{
    res.render('periodo_academico/agregar');
});

router.post('/agregar', async(req,res)=>{
    const {periodo} = req.body;
    const New = {perido};
    await pool.query('insert into periodo_academico set ?', [New]);
    res.redirect('/periodo/consultar');
});
module.exports=router;