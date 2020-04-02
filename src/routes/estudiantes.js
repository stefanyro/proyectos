const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/', async (req, res) => {
    const user = await pool.query('select * from estudiantes')
    res.render('estudiantes/consultar', { user });
});

router.post('/agregar', async (req, res) => {
    const { nombre, edad, correo } = req.body;
    const New = { nombre, edad, correo };
    await pool.query('insert into estudiantes set ?', [New]);
    res.redirect('estudiantes/consultar');
});
module.exports = router;