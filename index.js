const express = require('express');
const app = express();


//Routes
app.get('/', (req, res) => {
 res.end('Hello world');
});

app.get('/login', (req, res) => {
    res.end('Aqui va el login');
   });
   
app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
   });
   

app.listen(3000, function () {
console.log('Servidor funcionando')
})



