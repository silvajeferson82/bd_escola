const { Model, DataTypes } = require('sequelize');

class Responsavel extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      profissao: DataTypes.STRING,
      cpf: DataTypes.STRING,
      datanascimento: DataTypes.STRING,
      genero: DataTypes.STRING,
      email: DataTypes.STRING,
    },{
      sequelize
    })
  }
}

module.exports = Responsavel;