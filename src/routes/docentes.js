const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/',async(req,res)=>{
    const user = await pool.query('select * from docentes')
    res.render('docentes/consultar',{user});
});

router.post('/agregar', async (req, res) => {
    const { nombre, edad, correo } = req.body;
    const New = { nombre, edad, correo };
    await pool.query('insert into docentes set ?', [New]);
    res.redirect('docentes/consultar');
});
module.exports=router;