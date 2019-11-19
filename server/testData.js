const Item = require('./models/item.model');

const loadTestData = async () => {
    const data = [
        {
            id : "123",
            name : "EVA foam",
            price : 1.9,
            tag : "On sale",
            description : "EVA foam is our high density foam. This foam (light grey) is perfect for any armour or prop making! \
            Because of the high density the cells are closed and so makes easy to sand, dremel or even lazercut! Can be heatsealed, and also easy to ingrave using a sharp knive and then heated with a heatgun. This foam can be primed with plasti dip, flexbond, flexi paint or Gesso. \
            EVA-foam high density is easy to glue, waterproof and UV-resistant, washable, flexible and thus easy to form in to shape. Because of these properties, the foam is ideal to work with, both for the amateur and the professional hobbyist or artist. \
            This foam is now also used in the movie world and cosplay world to make props and costumes (Ironman suit). \
            EVA is an abbreviation of ethylene-vinyl acetate.",
            picture : "../../../pictures/EVA foam.jpg",
            quantity: 0,
        },
        {
            id : "abc",
            name : "Worbla",
            price : 9,
            tag : "",
            description : "Worbla is a brand of innovative, non-toxic (conforms to ASTM D-4236*) thermoplastics designed to give artists a product that allows endless creativity without sacrificing quality or safety. \
            Ever evolving, the Worbla line of thermoplastics offers something for everyone with an easy learning curve, 100% recyclable material and wide range of applications. \
            Worbla products have been used internationally, from Disney to Star Trek to Cirque du Soleil, stage to screen, by crafters, cosplayers, sculptors, schools and architects",
            picture : "../../../pictures/worbla.jpg",
            quantity: 0,
        },
        {
            id : "12ab",
            name : "Stormbreaker",
            price : 49,
            tag : "New item",
            description : "Handmade real-size replica of Thor's Stormbreaker from Marvel Infinity War. \
            Stormbreaker is an enchanted axe used by Thor. It was forged from Uru on Nidavellir. \
            Eitri claimed the weapon was meant to become the strongest weapon in Asgard's history.",
            picture : "../../../pictures/stormbreaker.jpg",
            quantity: 0,
        },
    ];

    try {
        let counter = await Item.countDocuments();
        if(counter === 0) {
            console.log('No items. Loading data...');
            await Item.create(data);
            console.log('Test data has been successfully loaded');
        }
    } catch(err) {
        console.log('Couldn\'t load test data', err);
    }
};

module.exports = loadTestData;