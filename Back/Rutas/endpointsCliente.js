const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/registro', async (req, res) => {

    const { username, email, password } = req.body;

    // Validar que todos los campos estén presentes
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try{

        // Verificar si el usuario ya existe

        const conexionmongo = await mongoose.connect(process.env.MONGODB_URI);

        const existeusuario = await mongoose.connection.db.collection('usuarios').findOne({ $or: [ { username }, { email } ] });

        if(existeusuario){
            console.log('El nombre de usuario o correo electrónico ya está en uso' + JSON.stringify(existeusuario));
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
      console.error('Error en el registro:', error.stack || error);
    return res.status(500).json({ 
        message: 'Error del servidor', 
        error: error.message })




    }



});


router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }


    username.includes('@') ? { email: username } : { username: username };

       try {
    
        const conexionmongo = await mongoose.connect(process.env.MONGODB_URI);

if (!conexionmongo) {
    console.error('Error al conectar a la base de datos desde el backend');
}


const usuario = await mongoose.connection.db.collection('usuarios').findOne({

     $or: [ { username: username }, { email: username } ] 
   
});
    
    if (!usuario) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }



    // Comparar la contraseña proporcionada con la almacenada en la base de datos
    const esPasswordValido = await bcrypt.compare(password, usuario.password);

    if (!esPasswordValido) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }


    // Aquí podrías generar un token JWT si es necesario

    const token = jwt.sign(
        { userId: usuario._id, username: usuario.username },
        process.env.JWT_TOKEN,
        { expiresIn: '7d' }
    );
    

    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 días
    });


    return res.status(200).json({ message: 'Usuario ha iniciado sesión con éxito' });

       } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        return res.status(500).json({ message: 'Error del servidor' });
       }});

 











module.exports = router;