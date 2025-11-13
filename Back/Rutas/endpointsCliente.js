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

  try {
    // Conectar a MongoDB (si ya estás conectado globalmente, omite esto)
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Determinar si buscan por email o username
    const query = username.includes('@') ? { email: username } : { username };

    const usuario = await mongoose.connection.db.collection('usuarios').findOne(query);

    if (!usuario) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Comparar contraseña
    const esPasswordValido = await bcrypt.compare(password, usuario.password);
    if (!esPasswordValido) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar JWT
    const token = jwt.sign(
      { userId: usuario._id, username: usuario.username },
      process.env.JWT_TOKEN,
      { expiresIn: '7d' }
    );

    // Enviar cookie segura
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,        // HTTPS obligatorio
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 días
    });

    return res.status(200).json({ message: 'Usuario ha iniciado sesión con éxito' });

  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ message: 'Error del servidor', error: error.message });
  }
});
 











module.exports = router;