const express = require('express');
const AlunoController = require('./controllers/AlunoController');

const routes = express.Router();

routes.post('/aluno',AlunoController.store);
routes.get('/aluno',AlunoController.index);
 
module.exports = routes;