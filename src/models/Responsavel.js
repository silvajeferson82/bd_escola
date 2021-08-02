module.exports =  function(sequelize, DataTypes){
  return sequelize.define(
    'responsaveis',{
      name: {
        types: DataTypes.STRING,
      },
      profissao:{
        type: DataTypes.STRING,
      },
      cpf:{
        type: DataTypes.STRING,
      },
      datanascimento:{
        type: DataTypes.STRING,
      },
      genero: {
        type: DataTypes.STRING
      },
      email:{
        type: DataTypes.STRING
      }
    },{
      tableName: 'responsaveis'
    });
}



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