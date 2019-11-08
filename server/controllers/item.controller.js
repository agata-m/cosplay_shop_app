const Item = require('../models/item.model');

// get all items

exports.getItems = async (req, res) => {
    
    try {
        res.status(200).json(await Item.find());
    
    } catch(err) {
        res.status(500).json(err);
    }
};

//get single item 
exports.getSingleItem = async (req, res) => {
    try {
        res.status(200).json(await Item.findOne( {id: req.params.id} ));
    } catch(err) {
        res.status(500).json(err);
    }
}

//get items by range

exports.getItemsByRange = async function (req, res) {

    try {
        let { startAt, limit } = req.params;

        startAt = parseInt(startAt);
        limit = parseInt(limit);

        const items = await Item.find().skip(startAt).limit(limit);
        const amount = await Item.countDocuments();

        res.status(200).json({
            items,
            amount,    
        });
    
    } catch(err) {
        res.status(500).json(err);
    }
};