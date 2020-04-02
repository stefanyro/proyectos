const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/',async(req,res)=>{
    const user = await pool.query('select * from materias')
    res.render('materias/consultar',{user});
}); 

router.post('/agregar', async(req,res)=>{
    const {materia} = req.body;
    const New = {materia};
    await pool.query('insert into materias set ?', [New]);
    res.redirect('materias/consultar');
});
module.exports=router;