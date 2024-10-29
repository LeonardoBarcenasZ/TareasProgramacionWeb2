const express = require("express");
const path = require("path");
const pageRutes = require("./Route/pages");

const app = express();
const PORT = 3029;

app.use(express.static('public'));

app.use('/', pageRutes);

app.get('/',(req, res) => {
    res.redirect('/page1')
});

app.listen(PORT, () => {
    console.log('Barcenas Zavala Leonardo')
    console.log(`Escuchando desde http://127.0.0.1:${PORT}`);
});
