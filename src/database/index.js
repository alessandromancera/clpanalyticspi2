const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Esteira = require('../models/esteira');
const EsteriaDetalhes = require('../models/esteira_detalhes');
const Forno = require('../models/forno');
const FornoDetalhes = require('../models/forno_detalhes');
const FlowPack = require('../models/flowpack');

const connection = new Sequelize(dbConfig);

Esteira.init(connection);
EsteriaDetalhes.init(connection);
Forno.init(connection);
FornoDetalhes.init(connection);
FlowPack.init(connection);

Esteira.associate(connection.models);
EsteriaDetalhes.associate(connection.models);
Forno.associate(connection.models);
FornoDetalhes.associate(connection.models);

module.exports = connection;