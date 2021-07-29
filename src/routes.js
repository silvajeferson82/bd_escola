const express = require('express');
const AlunoController = require('./controllers/AlunoController');
const ResponsavelController = require('./controllers/ResponsavelController');

const routes = express.Router();

routes.post('/aluno',AlunoController.store);
routes.get('/alunos',AlunoController.index);

routes.post('/aluno/:aluno_id/responsavel',ResponsavelController.store);
 
module.exports = routes;