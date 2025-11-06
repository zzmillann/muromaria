const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


router.post('/registro', async (req, res) => {

    const { username, email, password } = req.body;

    // Validar que todos los campos estén presentes
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try{

        // Verificar si el usuario ya existe

        const conexionmongo = await mongoose.connect('mongodb://localhost:27017/muromaria');

        const existeusuario = await mongoose.connection.db.collection('usuarios').findOne({ $or: [ { username }, { email } ] });

        if(existeusuario){
            return  res.status(409).json({ message: 'El nombre de usuario o correo electrónico ya está en uso' });
        }

        //sino pues lo creamos

        const usuarioNuevo = {
            username,
            email,
            password: await bcrypt.hash(password, 10) // Hashear la contraseña
        };

        const resultado = await mongoose.connection.db.collection('usuarios').insertOne(usuarioNuevo);

        return res.status(201).json({ message: 'Usuario registrado con éxito' });


    }catch(error){
        console.error('Error en el registro:', error);
        return res.status(500).json({ message: 'Error del servidor' });




    }



});












module.exports = router;