'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('forno', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      temperatura_z1: {
        type: Sequelize.FLOAT(12,2),
        allowNull: false,
      },
      temperatura_z2: {
        type: Sequelize.FLOAT(12,2),
        allowNull: false,
      },
      temperatura_z3: {
        type: Sequelize.FLOAT(12,2),
        allowNull: false,
      },
      temperatura_z4: {
        type: Sequelize.FLOAT(12,2),
        allowNull: false,
      },
      temperatura_z5: {
        type: Sequelize.FLOAT(12,2),
        allowNull: false,
      },
      velocidade_esteira: {
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
    await queryInterface.dropTable('forno');

  }
};
