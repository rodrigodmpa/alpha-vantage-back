const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const EquitySchema = new mongoose.Schema({
    symbol:{
        type: String,
        required: true,
    },
    information: {
        type: String,
        required: true,
    },
    last_refreshed: {
        type: Date,
        required: true,
    },
    output_size: {
        type: String,
        required: true,
    },
    time_zone: {
        type: String,
        required: true,
    },
});

EquitySchema.plugin(mongoosePaginate);

mongoose.model('Equity', EquitySchema);
