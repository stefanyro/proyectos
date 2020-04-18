const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/consultar',async(req,res)=>{
    const AsignarMateria = await pool.query('select d.nombre, m.materia, p.periodo from docentes d, materias m, periodo p, asigna_materia_docente a WHERE a.id_docente=d.id_docente AND a.id_materia=m.id_materia AND a.id_periodo=p.id_periodo')
    res.render('asigna_materia/consultar',{AsignarMateria});
});
module.exports=router;