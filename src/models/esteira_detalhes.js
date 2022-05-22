const { Model, DataTypes } = require('sequelize');

class EsteiraDetalhes extends Model {
    static init(sequelize){
        super.init({
            velocidade_rolo: DataTypes.FLOAT(12,2),
            velocidade_esteira: DataTypes.FLOAT(12,2),
            velocidade_esteira: DataTypes.DATE,
        }, {
            sequelize,
            paranoid: false,
            timestamps: false,
            tableName: 'esteira_detalhes'
        })
    }
    static associate(models) {
        this.belongsTo(models.Esteira, { foreignKey: 'esteira_id', as: 'esteira' });
    }
}

module.exports = EsteiraDetalhes;

