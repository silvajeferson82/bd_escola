import express from 'express';
import AlunoController from './controllers/AlunoController';
import ResponsavelController from './controllers/ResponsavelController';

const alunoRoutes = express.Router();

alunoRoutes.post('/aluno',AlunoController.store);
alunoRoutes.get('/alunos',AlunoController.index);

alunoRoutes.post('/aluno/:aluno_id/responsavel',ResponsavelController.store);
 
export default alunoRoutes;