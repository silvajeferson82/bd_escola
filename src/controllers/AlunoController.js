import Aluno from '../models/Alunos';

class AlunoController {
  async index(req,res){
    const alunos = await Aluno.findAll();

    return res.json(alunos);
  }

  async store(req, res){
    const {name, genero, email, datanascimento } = req.body;

    const aluno = await Aluno.create({ name, genero, email, datanascimento });

    return res.json(aluno);
  }
}

export default new AlunoController();