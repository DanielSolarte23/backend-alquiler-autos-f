const express = require('express');
const router = express.Router();

const autoController = require('../controller/autoscontroller');

// Ruta para obtener autos disponibles
router.get('/', autoController.autosDisponibles);

// Ruta para registrar un nuevo auto
router.post('/', autoController.registrarAuto);
router.put('/:id', autoController.actualizarAuto);
router.delete('/:id', autoController.eliminarAuto);

module.exports = router;
