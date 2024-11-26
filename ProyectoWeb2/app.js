const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require("path");
const pageRutes = require("./routes/pages");

/* Instanciar */
const app = express();

/* Puerto */
const port = 3008;

app.use('/', pageRutes);
app.use(express.static('estilos'))

app.use(bodyParser.urlencoded({extended: false})); 

app.set('view engine', 'ejs'); 



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gaby1109',
    database: 'bd',
    port: '3306'
});


// conexion db
db.connect(err => {
    if(err){
        console.log(`Error al conectar con la BD`);
    } else{
        console.log(`Conexion con exito`);
    }

});

//server inicio
app.listen(port,()=>{
    console.log(`El server esta en escucha desde http://localhost:${port}`);
});

// lista de usuarios

app.get('/', (req, res) => {
    
    const query = 'select * from usuarios';
    
    db.query(query, (err, results) => {
        if(err){
            
            console.error(`Error al recupear los datos. Codigo de error: ${err}`)
            res.send('Error al recuperar los datos');
        } else{
            res.render('index',{users: results});
        }
    });
});

// Agregar

app.post('/add', (req, res) => {

    const {nombre, email} = req.body;
    const query = 'insert into usuarios (nombre, email) value (?,?)';
    db.query(query,[nombre, email], (err) => {
        if(err){
            console.error(`Error al insertar datos en la tabla de usuarios. Codigo de error: ${err}`);
            res.send(`Error al insertar datos en la tabla de usuarios.`)
        } else{
            res.redirect('/');
        }
    });
});

//Editar

app.get('/editar/:id', (req, res) => {

    const {id} = req.params;
    const query = 'select * from usuarios where id = ?';
    db.query(query, [id], (err,results) => {

        if(err){
            console.error('Error en la BD');
            res.send("Error en la BD")
        } else{

            res.render('editar', {users:results[0]});
        }
    });
});

app.post('/editar/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    const query = 'update usuarios set nombre = ?, email = ? WHERE id = ?';
    db.query(query, [nombre, email, id], (err,results) => {

        if(err){
            console.error('Error en la BD');
            res.send("Error en la BD")
        } else{

            res.redirect('/');
        }
    });
});

//Eliminar

app.get('/eliminar/:id', (req, res) => {

    const {id} = req.params;
    const query = 'delete from usuarios where id = ?';

    db.query(query,[id], (err) => {

        if(err){
            console.error('Error al Eliminar');
            res.send("Error al Eliminar");
        } else {
            res.redirect('/');
        }

    });
});
