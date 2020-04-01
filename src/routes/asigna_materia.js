const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/',async(req,res)=>{
    const user = await pool.query('select * from asigna_materia_docente')
    res.render('asigna_materia/consultar',{user});
});
module.exports=router;