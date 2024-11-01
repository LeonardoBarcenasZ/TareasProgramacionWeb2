const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/Tarea7', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/index.html'))
});

router.get('/calculadora', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/calculadora.html'))
});

router.get('/qr', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/qr.html'))
});

router.get('/style.css', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/style.css'))
});

router.get('/app.js', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/app.js'))
});

router.get('/app2.js', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/app2.js'))
});



module.exports=router;