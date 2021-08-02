import Responsavel from '../models/Responsavel';
import Aluno from '../models/Alunos';

class ResponsavelController {
  async store(req, res){
    const { name, profissao, cpf, datanascimento, genero, email } = req.body;
    const { aluno_id } = req.params;

    const aluno = await Aluno.findByPk(aluno_id);

    if(!aluno){
      return res.status(400).json({error: 'Aluno não encontrado...'});
    }

    const responsavel = await Responsavel.create({
      name, profissao, cpf, datanascimento, genero, email, aluno_id,
    });

    return res.json(responsavel);
  }
}

export default new ResponsavelController();