const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/',async(req,res)=>{
    const user = await pool.query('select * from periodo_academico')
    res.render('periodo_academico/consultar',{user});
});
module.exports=router;