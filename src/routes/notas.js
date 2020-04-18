const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/consultar',async(req,res)=>{
    const consultaNota = await pool.query('SELECT e.nombre,d.nombre, m.materia,p.periodo,n.nota FROM estudiantes e, docentes d, materias m, periodo_academico p, notas n WHERE e.id_estudiante=n.id_estudiante AND d.id_docente=n.id_docente AND m.id_materia=n.id_materia AND p.id_periodo=n.id_periodo')
    res.render('notas/consultar',{consultaNota});
});

router.get('/agregar',async(req,res)=>{
    res.render('notas/agregar');
});

router.post('/agregar', async(req,res)=>{
    const {nota} = req.body;
    const Newnota = {nota};
    await pool.query('insert into notas set ?', [Newnota]);
    res.redirect('/notas/consultar');
});
module.exports=router;