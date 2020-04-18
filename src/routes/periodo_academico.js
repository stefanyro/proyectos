const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/consultar',async(req,res)=>{
    const user = await pool.query('select * from periodo_academico')
    res.render('periodo_academico/consultar',{user});
});

router.get('/agregar',async(req,res)=>{
    res.render('periodo_academico/agregar');
});

router.post('/agregar', async(req,res)=>{
    const {periodo} = req.body;
    const New = {perido};
    await pool.query('insert into periodo_academico set ?', [New]);
    res.redirect('/periodo/consultar');
});

router.get('/delete/:id_periodo', async(req, res) => {
    const {id_periodo} = req.params;
    const EliminaPeriodo =  await pool.query('delete from periodo_academico where id_periodo=?',[id_periodo]);
    res.redirect('/periodo/consultar');
});

router.get('/update/:id_periodo', async(req, res)=>{
    const {id_periodo} = req.params;
    const ModificaPeriodo = await pool.query('select * from periodo_academico where id_periodo=?',[id_periodo]);
    res.render('periodo_academico/modificar',{ModificaPeriodo});
});

router.post('/update/:id_periodo', async(req, res)=>{
    const {id_periodo} = req.params;
    const {periodo} = req.body;
    await pool.query("UPDATE periodo_academico set periodo='" + [periodo] + "' WHERE id_periodo='" + [id_periodo] + "'");
    res.redirect('/periodo/consultar');
});
module.exports=router;