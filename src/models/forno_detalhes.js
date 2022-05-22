const { Model, DataTypes } = require('sequelize');

class FornoDetalhes extends Model {
    static init(sequelize){
        super.init({
            temperatura_z1: DataTypes.FLOAT(12,2),
            temperatura_z2: DataTypes.FLOAT(12,2),
            temperatura_z3: DataTypes.FLOAT(12,2),
            temperatura_z4: DataTypes.FLOAT(12,2),
            temperatura_z5: DataTypes.FLOAT(12,2),
            velocidade_esteira: DataTypes.FLOAT(12,2),
            pid_z1: DataTypes.INTEGER(3),
            pid_z2: DataTypes.INTEGER(3),
            pid_z3: DataTypes.INTEGER(3),
            pid_z4: DataTypes.INTEGER(3),
            pid_z5: DataTypes.INTEGER(3),
            corrente_motor: DataTypes.FLOAT(12,2),
            timestamp: DataTypes.DATE,
        }, {
            sequelize,
            paranoid: false,
            timestamps: false,
            tableName: 'forno_detalhes'
        })
    }
    static associate(models) {
        this.belongsTo(models.Forno, { foreignKey: 'forno_id', as: 'forno' });
    }
}

module.exports = FornoDetalhes;

