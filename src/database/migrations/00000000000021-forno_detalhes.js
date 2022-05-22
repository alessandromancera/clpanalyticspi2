'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('forno_detalhes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      forno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'forno',
          key: 'id',
        },
        onUpload: 'CASCADE',
        onDelete: 'CASCADE',
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
      pid_z1: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
      },
      pid_z2: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
      },
      pid_z3: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
      },
      pid_z4: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
      },
      pid_z5: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
      },
      corrente_motor: {
        type: Sequelize.FLOAT(12,2),
        allowNull: false,
      },
      timestamp: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('forno_detalhes');

  }
};
