const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/page1', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/Pagina1.html'))
});

router.get('/page2', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/Pagina2.html'))
});

router.get('/page3', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/Pagina3.html'))
});

router.get('/style.css', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/style.css'))
});

module.exports=router;