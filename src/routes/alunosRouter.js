// 
const { Router } = require('express');
const router     = Router();

const listarUsuarios = require('../controllers/alunosController');

router.get('/alunos', listarUsuarios);

module.exports = router;
