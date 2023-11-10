// 
const { Router } = require('express');
const router     = Router();

// Importar funções para as rotas
const {
  listarUsuarios,
  cadastrarAluno
} = require('../controllers/alunosController');

router.get('/alunos', listarUsuarios);
router.post('/aluno/create', cadastrarAluno);

module.exports = router;
