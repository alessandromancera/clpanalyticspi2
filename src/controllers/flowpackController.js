const FlowPack = require('../models/flowpack');

module.exports = {
    // SHOW COUNT
    async count(req, res) {
        try {
            const floapack = await FlowPack.count();
            return res.status(200).json(floapack);
        } catch (err) {
            res.status(400).json({ "error": err });
        }
    },
    // SHOW ONE
    async show(req, res) {
        try {
            const id = (!isNaN(req.params.id)) ? req.params.id : undefined;
            if (id == undefined) return res.status(400).json({ "error": "ID inválido" });

            const floapack = await FlowPack.findOne({
                where: { id: id },
            });
            return res.status(200).json(floapack);
        } catch (err) {
            res.status(400).json({ "error": err });
        }
    },
    //SHOW ALL
    async index(req, res) {
        try {
            const floapack = await FlowPack.findAndCountAll();
            return res.status(200).json(floapack);
        } catch (err) {
            res.status(400).json({ "error": err });
        }
    }
}