const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/',async(req,res)=>{
    const user = await pool.query('SELECT * FROM notas')
    res.render('notas/consultar',{user});
});

router.post('/agregar', async(req,res)=>{
    const {nota} = req.body;
    const Newnota = {nota};
    await pool.query('insert into notas set ?', [Newnota]);
    res.redirect('notas/consultar');
});
module.exports=router;