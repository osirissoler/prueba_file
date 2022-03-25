const { Router } = require('express');
const { getUsuario, postUsuario } = require('../controllers/usuarios');

const router = Router()
router.get('/', getUsuario)
router.post('/', postUsuario)


module.exports = router;