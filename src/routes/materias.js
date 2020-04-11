const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/',async(req,res)=>{
    const ConsultaMateria = await pool.query('select * from materias')
    res.render('materias/consultar',{ConsultaMateria});
}); 

router.post('/agregar', async(req,res)=>{
    const {materia} = req.body;
    const NewMateria = {materia};
    await pool.query('insert into materias set ?', [NewMateria]);
    res.redirect('materias/consultar');
});
module.exports=router;