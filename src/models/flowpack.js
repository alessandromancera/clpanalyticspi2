const { Model, DataTypes } = require('sequelize');

class FlowPack extends Model {
    static init(sequelize){
        super.init({
            velocidade_maquina: DataTypes.FLOAT(12,2),
            quantidade_produtos_embalados: DataTypes.INTEGER,
            quantidade_embalagens: DataTypes.INTEGER,
            posicao_figura: DataTypes.FLOAT(12,2),
            timestamp: DataTypes.DATE,
        }, {
            sequelize,
            paranoid: false,
            timestamps: false,
            tableName: 'flow_pack'
        })
    }
}

module.exports = FlowPack;

