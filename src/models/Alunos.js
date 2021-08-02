module.exports = function(sequelize ,Model, DataTypes){
  return sequelize.dfine(
    'alunos',{
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      genero: {
        type: DataTypes.STRING
      },
      datanascimento:{ 
        type:DataTypes.STRING,
      }
    },{
      tableName: 'alunos'
    });
}



