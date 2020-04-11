const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/',async(req,res)=>{
    const MostrarDocente = await pool.query('select * from docentes')
    res.render('docentes/consultar',{MostrarDocente});
});

router.post('/agregar', async (req, res) => {
    const { nombre, edad, correo } = req.body;
    const NewDocente = { nombre, edad, correo };
    await pool.query('insert into docentes set ?',[NewDocente]);
    res.redirect('docentes/consultar');
});
module.exports=router;