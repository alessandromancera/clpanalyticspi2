const { Model, DataTypes } = require('sequelize');

class Forno extends Model {
    static init(sequelize){
        super.init({
            temperatura_z1: DataTypes.FLOAT(12,2),
            temperatura_z2: DataTypes.FLOAT(12,2),
            temperatura_z3: DataTypes.FLOAT(12,2),
            temperatura_z4: DataTypes.FLOAT(12,2),
            temperatura_z5: DataTypes.FLOAT(12,2),
            velocidade_esteira: DataTypes.FLOAT(12,2),
            timestamp: DataTypes.DATE,
        }, {
            sequelize,
            paranoid: false,
            timestamps: false,
            tableName: 'forno'
        })
    }
    static associate(models) {
        this.hasMany(models.FornoDetalhes, { foreignKey: 'forno_id', as: 'detalhes' });
    }
}

module.exports = Forno;

