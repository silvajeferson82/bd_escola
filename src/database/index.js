import Sequelize from 'sequelize'
import dbConfig from '../config/database';

import Aluno from '../models/Alunos';
import Responsavel from '../models/Responsavel';

class Database{
  init(){

    this.connection = new Sequelize(dbConfig);

    Aluno.init(connection);
    Responsavel.init(connection);
  }
}

export default new Database();