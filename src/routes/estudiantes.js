const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/consultar', async (req, res) => {
    const ConsultaEstudiante = await pool.query('select * from estudiantes')
    res.render('estudiantes/consultar', {ConsultaEstudiante});
});

router.get('/agregar', async(req, res)=>{
    res.render('estudiantes/agregar');
})

router.post('/agregar', async (req, res) => {
    const { nombre, edad, correo } = req.body;
    const NewEstudiante = { nombre, edad, correo };
    await pool.query('insert into estudiantes set ?', [NewEstudiante]);
    res.redirect('/estudiantes/consultar');
});

router.get('/delete/:id_estudiante', async(req, res) => {
    const {id_estudiante} = req.params;
    const EliminaEstudiante =  await pool.query('delete from estudiantes where id_estudiante=?',[id_estudiante]);
    res.redirect('/estudiantes/consultar');
});
module.exports = router;