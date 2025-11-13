// Pipeline configuration for routing
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = (expressconfig)  =>{
    // Enable CORS
expressconfig.use(cors({
    origin: 'http://localhost:5173', // URL de tu frontend
    credentials: true // Permite enviar cookies
}));
    // Parse JSON bodies
    expressconfig.use(bodyParser.json());
    
    // Parse URL-encoded bodies
    expressconfig.use(bodyParser.urlencoded({ extended: true }));
    
    // Parse cookies
    expressconfig.use(cookieParser());


    // Basic test route
    expressconfig.get('/api/test', (req, res) => {
       res.status(200).send("No encontrado");
    });

  


    expressconfig.use('/api/Cliente', require('./../Rutas/endpointsCliente'));

}

