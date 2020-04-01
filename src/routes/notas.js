const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/',async(req,res)=>{
    const user = await pool.query('SELECT e.nombre,d.nombre, m.materia,p.periodo,n.nota FROM estudiantes e, docentes d, materias m, periodo_academico p, notas n WHERE e.id_estudiante=n.id_estudiante AND d.id_docente=n.id_docente AND m.id_materia=n.id_materia AND p.id_periodo=n.id_periodo')
    res.render('notas/consultar',{user});
});
module.exports=router;