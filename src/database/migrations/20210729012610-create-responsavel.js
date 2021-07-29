'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('responsaveis',{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      },
      aluno_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: 'alunos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      profissao:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      datanascimento:{
        type: Sequelize.STRING,
        allowNull: false
      },
      genero:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('responsaveis');
  }
};
