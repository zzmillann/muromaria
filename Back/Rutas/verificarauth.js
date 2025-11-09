const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

const token = req.headers['authorization'];

if (!token) {
    return res.status(401).json({ message: 'No se proporcionó token de autenticación' });

try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;
    next();
} catch (error) {
    return res.status(401).json({ message: 'Token de autenticación inválido' });









}}
}