const Esteira = require('../models/esteira');

module.exports = {
    // SHOW COUNT
    async count(req, res) {
        try {
            const esteira = await Esteira.count();
            return res.status(200).json(esteira);
        } catch (err) {
            res.status(400).json({ "error": err });
        }
    },
    // SHOW ONE
    async show(req, res) {
        try {
            const id = (!isNaN(req.params.id)) ? req.params.id : undefined;
            if (id == undefined) return res.status(400).json({ "error": "ID inválido" });

            const esteira = await Esteira.findOne({
                where: { id: id },
                include: [
                    {
                        association: 'detalhes',
                    },
                ],
            });
            return res.status(200).json(esteira);
        } catch (err) {
            res.status(400).json({ "error": err });
        }
    },
    //SHOW ALL
    async index(req, res) {
        try {
            const esteira = await Esteira.findAndCountAll({
                include: [{
                    association: 'detalhes',
                }],
            });
            return res.status(200).json(esteira);
        } catch (err) {
            res.status(400).json({ "error": err });
        }
    }
}