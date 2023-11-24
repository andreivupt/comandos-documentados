// 
const { Router } = require('express');
const router     = Router();

// Importar funções para as rotas
const {
  listarUsuarios,
  cadastrarAluno, 
  update,
  deleteAluno
} = require('../controllers/alunosController');

router.get('/alunos', listarUsuarios);
router.post('/aluno/create', cadastrarAluno);
router.put('/aluno/update/:id', update);
router.delete('/aluno/delete/:id', deleteAluno);

module.exports = router;
