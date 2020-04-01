const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/add', async(req,res) => {
    const user = await pool.query('select * from usuarios')
    res.render('links/add',{user});
});

router.post('/add', async(req,res) => {
    //res.send('heloo');
    //console.log(req.body);

    const {usuario, contrasena} = req.body;
    const newUser = {usuario, contrasena}

    await pool.query('insert into usuarios set ?', [newUser]);

    res.redirect('/links/add');
});

router.get('/delete/:id_usuarios', async(req,res)=>{
    const {id} = req.params;
    const user = await pool.query('delete from usuarios where id_usuarios=?',[id_usuarios]);
    res.redirect('/links/add');
})
module.exports=router;