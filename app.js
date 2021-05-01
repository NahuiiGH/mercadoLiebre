const express = require("express");
const app = express();
const path = require ('path');

// app.use(express.static(path.resolve(__dirname, 'public')));
// app.use('/public/img', express.static(path.join (__dirname, '/public')));

const publicPath = path.resolve(__dirname, './public');

app.use (express.static(publicPath));




app.listen(process.env.PORT || 3000, function () {
    console.log('Estoy corriendo en el puerto 3000');
});

app.get('/' , (req,res) => {
    res.sendFile (path.resolve (__dirname + '/views/home.html'));
});

app.get('/login' , (req,res) => {
    res.sendFile (path.resolve (__dirname + '/views/login.html'));
});

app.get('/register' , (req,res) => {
    res.sendFile (path.resolve (__dirname + '/views/register.html'));
});