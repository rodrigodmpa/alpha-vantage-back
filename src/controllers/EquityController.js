const mongoose = require('mongoose');
var request = require('request');

const Equity = mongoose.model('Equity');
api_key = process.env.ALPHA_VANTAGE_KEY

module.exports = {
    async index(req, res) {
    request('https://www.alphavantage.co/query?function='+req.params.function+'&symbol='+req.params.symbol+'&apikey='+ api_key, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //console.log(body) // Show the HTML for the Google homepage. 
        return res.send(body);
    }
    });
    }
};