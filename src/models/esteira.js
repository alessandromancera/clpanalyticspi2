const { Model, DataTypes } = require('sequelize');

class Esteira extends Model {
    static init(sequelize){
        super.init({
            velocidade_rolo: DataTypes.FLOAT(12,2),
            velocidade_esteira: DataTypes.FLOAT(12,2),
            timestamp: DataTypes.DATE,
        }, {
            sequelize,
            paranoid: false,
            timestamps: false,
            tableName: 'esteira'
        })
    }
    static associate(models) {
        this.hasMany(models.EsteiraDetalhes, { foreignKey: 'esteira_id', as: 'detalhes' });
    }
}

module.exports = Esteira;

