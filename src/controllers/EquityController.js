const mongoose = require('mongoose');

const Equity = mongoose.model('Equity');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const equity = await Equity.paginate({},{page,limit: 10});

        return res.json(equity);
    },
    // async show(req, res){
    //     const qeuity = await Equity.findById(req.params.id);
    //     return res.json(qeuity);
    // }
};