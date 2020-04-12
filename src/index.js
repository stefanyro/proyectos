const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//Inicio
const app = express(); 

//Configuraciones 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views')); 
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');
app.set('json spaces', 2);

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Variables globales
app.use((req,res,next)=>{
    next();
});

//Rutas 
app.use(require('./routes')); 
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use('/tablas',require('./routes/tablas'));
app.use('/estudiantes',require('./routes/estudiantes'));
app.use('/docentes',require('./routes/docentes'));
app.use('/notas',require('./routes/notas'));
app.use('/materias',require('./routes/materias'));
app.use('/periodo',require('./routes/periodo_academico'));
app.use('/asigna',require('./routes/asigna_materia'));

//Public
app.use(express.static (path.join(__dirname, 'public')));

//Inicia el server 
app.listen(app.get('port'),() =>{
    console.log('serve on port', app.get('port'));
}); 


