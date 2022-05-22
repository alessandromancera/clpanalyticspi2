const Forno = require('../models/forno');

module.exports = {
    // SHOW COUNT
    async count(req, res) {
        try {
            const forno = await Forno.count();
            return res.status(200).json(forno);
        } catch (err) {
            res.status(400).json({ "error": err });
        }
    },
    // SHOW ONE
    async show(req, res) {
        try {
            const id = (!isNaN(req.params.id)) ? req.params.id : undefined;
            if (id == undefined) return res.status(400).json({ "error": "ID inválido" });

            const forno = await Forno.findOne({
                where: { id: id },
                include: [
                    {
                        association: 'detalhes',
                    },
                ],
            });
            return res.status(200).json(forno);
        } catch (err) {
            res.status(400).json({ "error": err });
        }
    },
    //SHOW ALL
    async index(req, res) {
        try {
            const forno = await Forno.findAndCountAll({
                include: [{
                    association: 'detalhes',
                }],
            });
            return res.status(200).json(forno);
        } catch (err) {
            res.status(400).json({ "error": err });
        }
    }
}