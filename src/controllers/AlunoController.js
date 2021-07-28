const Aluno = require('../models/Alunos');

module.exports = {
  async index(req,res){
    const alunos = await Aluno.findAll();

    return res.json(alunos);
  },
  async store(req, res){
    const {name, genero, email } = req.body;

    const aluno = await Aluno.create({ name, genero, email});

    return res.json(aluno);
  }
}