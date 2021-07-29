const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Aluno = require('../models/Alunos');
const Responsavel = require('../models/Responsavel');

const connection = new Sequelize(dbConfig);

Aluno.init(connection);
Responsavel.init(connection);

module.exports = connection;