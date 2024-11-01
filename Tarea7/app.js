const express = require("express");
const path = require("path");
const pageRutes = require("./Route/pages");

const app = express();
const PORT = 5005;

app.use(express.static('public'));

app.use('/', pageRutes);

app.get('/',(req, res) => {s
    res.redirect('/Tarea7')
});

app.listen(PORT, () => {
    console.log('Barcenas Zavala Leonardo')
    console.log(`Escuchando desde http://127.0.0.1:${PORT}`);
});