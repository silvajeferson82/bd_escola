'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'alunos',
      'datanascimento',
      {
        type: Sequelize.STRING,
        allowNull: false
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'alunos',
      'datanascimento',  
    );
  }
};
