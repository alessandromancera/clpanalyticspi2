'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('flow_pack', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      velocidade_maquina: {
        type: Sequelize.FLOAT(12,2),
        allowNull: false,
      },
      quantidade_produtos_embalados: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantidade_embalagens: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      posicao_figura: {
        type: Sequelize.FLOAT(12,2),
        allowNull: false,
      },
      timestamp: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('flow_pack');

  }
};
