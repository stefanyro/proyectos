const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/consultar',async(req,res)=>{
    const MostrarDocente = await pool.query('select * from docentes')
    res.render('docentes/consultar',{MostrarDocente});
});

router.get('/agregar',async(req,res)=>{
    res.render('docentes/agregar');
});

router.post('/agregar', async (req, res) => {
    const { nombre, edad, correo } = req.body;
    const NewDocente = { nombre, edad, correo };
    await pool.query('insert into docentes set ?',[NewDocente]);
    res.redirect('/docentes/consultar');
});

router.get('/delete/:id_docente', async(req, res) => {
    const {id_docente} = req.params;
    const EliminaEstudiante =  await pool.query('delete from docentes where id_docente=?',[id_docente]);
    res.redirect('/docentes/consultar');
});

router.get('/update/:id_docente', async(req, res)=>{
    const {id_docente} = req.params;
    const ModificaDocente = await pool.query('select * from docentes where id_docente=?',[id_docente]);
    res.render('docentes/modificar',{ModificaDocente});
});

router.post('/update/:id_docente', async(req, res)=>{
    const {id_docente} = req.params;
    const {nombre, edad, correo} = req.body;
    await pool.query("UPDATE estudiantes set nombre='" + [nombre] + "',edad='" + [edad] + "',correo='" + [correo] + "'WHERE id_docente='" + [id_docente] + "'");
    res.redirect('/docentes/consultar');
});
module.exports=router;