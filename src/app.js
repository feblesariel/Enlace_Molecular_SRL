// ************ Require's ************

const express = require('express');
const path = require('path');

// ************ express() - (don't touch) ************

const app = express();

// ************ Middlewares - (don't touch) ************

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));  // Indica donde estan los archivos estáticos /public
app.use(express.urlencoded({ extended: false }));  // Captura la informacion enviada por POST
app.use(express.json());

// ************ Template Engine - (don't touch) ************

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

// ************ Route System require and use() ************

const mainRouter = require("./routes/mainRouter");
app.use('/', mainRouter);

// ************ Run server ************

app.listen(3000, () => {
    console.log('Server running in 3000 port');
});