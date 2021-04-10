const express = require("express");
const app = express();
const path = require ('path');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/public/img', express.static(path.join(__dirname, '/public/img')));

app.get('/' , (req,res) => {

    res.sendFile (path.join (__dirname + '/views/home.html'));
});









app.listen('3000', function () {
    console.log('Estoy corriendo en el puerto 3000');
});