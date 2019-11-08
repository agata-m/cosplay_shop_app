const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema ({
    id: { type: 'String', required: true },
    name: { type: 'String', required: true },
    price: { type: 'String', required: true },
    deal: { type: 'String' },
    description: { type: 'String', required: true },
    picture: { type: 'String', required: true }
});

module.exports = mongoose.model('Item', Item);