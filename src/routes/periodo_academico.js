const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/',async(req,res)=>{
    const user = await pool.query('select * from periodo_academico')
    res.render('periodo_academico/consultar',{user});
});

router.post('/agregar', async(req,res)=>{
    const {periodo} = req.body;
    const New = {perido};
    await pool.query('insert into periodo_academico set ?', [New]);
    res.redirect('periodo_academico/consultar');
});
module.exports=router;