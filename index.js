const express = require('express');
const app = express();
const morgan = require('morgan');

//middlewares
app.use(morgan('dev'));

//Requiriendo rutas
const routes = require("./routes");
const routesApi = require("./routes-api");


//setting
app.set('appname', 'Mi primer server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//Routes
app.use(routes);
app.use("/api", routesApi);

app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
});

app.listen(3000, function () {
    console.log('Servidor funcionando')
    console.log('Nombre de la APP', app.get('appname'))
})


function newFunction() {
    app.use(morgan('short'));
    app.use(morgan('tiny'));
}

