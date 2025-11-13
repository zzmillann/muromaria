require('dotenv').config();

const express = require('express');
const expressconfig  = express();

const pipelineRoutes = require('./ConfiguracionEnrutamiento/pipeline');

pipelineRoutes(expressconfig);


const PORT = process.env.PORT || 3000;
expressconfig.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});


