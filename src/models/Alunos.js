const { Model, DataTypes } = require('sequelize');

class Alunos extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      genero: DataTypes.STRING,
      datanascimento: DataTypes.STRING
    },{
      sequelize
    })
  }
}

module.exports = Alunos;