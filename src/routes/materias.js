const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/consultar',async(req,res)=>{
    const ConsultaMateria = await pool.query('select * from materias')
    res.render('materias/consultar',{ConsultaMateria});
}); 

router.get('/agregar', async(req,res)=>{
    res.render('materias/agregar');
});

router.post('/agregar', async(req,res)=>{
    const {materia} = req.body;
    const NewMateria = {materia};
    await pool.query('insert into materias set ?', [NewMateria]);
    res.redirect('/materias/consultar');
});

router.get('delete/:id_materia',async(req,res) => {
    const {id_materia} = req.params;
    const EliminaMateria = await pool.query('delete from materias where id_materia=?',[id_materia]);
    res.redirect('/materias/consultar');
});
module.exports=router;