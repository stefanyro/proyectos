const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/',async(req,res)=>{
    const user = await pool.query('select * from materias')
    res.render('materias/consultar',{user});
});
module.exports=router;