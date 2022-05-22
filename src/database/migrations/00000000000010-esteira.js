'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('esteira', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      velocidade_rolo: {
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
    await queryInterface.dropTable('esteira');

  }
};
