const Item = require('./models/item.model');

const loadTestData = async () => {
    const data = [
        {
            id : "123",
            name : "EVA foam",
            price : 1.90,
            tag : "On sale",
            description : "EVA foam is our high density foam. It is perfect for any armour or prop making! Because of the high density the cells are closed and so makes easy to sand, dremel or even lazercut!\
            Can be heatsealed, and also easy to ingrave using a sharp knive and then heated with a heatgun. This foam can be primed with plasti dip, flexbond, flexi paint or Gesso. \
            EVA-foam high density is easy to glue, waterproof and UV-resistant, washable, flexible and thus easy to form in to shape. Because of these properties, the foam is ideal to work with, both for the amateur and the professional hobbyist or artist.",
            picture : "../../../pictures/EVA foam.jpg",
            quantity: 0,
        },
        {
            id : "abc",
            name : "Worbla black",
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
        {
            id : "23cd",
            name : "Loki's headpiece",
            price : 39,
            tag : "Bestseller",
            description : "Handmade real-size replica of Loki's helmet/crown from Marvel's Thor 3 Ragnarok. \
            Made from PVC, head circumference: 58-62cm. ",
            picture : "../../../pictures/loki_helmet.jpg",
            quantity: 0,
        },
        {
            id : "34de",
            name : "Elf Ears",
            price : 7.90,
            tag : "Popular",
            description : "These soft pointed elf ears are perfect as a part of your cosplay or an accessory for a dress up party \
            Made of food-grade material, they are super soft, non-toxic and tasteless. \
            You can easily change their color with makeup, like liquid foundation. Suitable for any skin colors.",
            picture : "../../../pictures/elf-ears.jpg",
            quantity: 0,
        },
        {
            id : "45ef",
            name : "Deathstroke Armor",
            price : 999.99,
            tag : "",
            description : "Deathstroke's custom armor set made in Reinforced EVA. Full custom size helmet \
            and mask with accurate fitting. Also comes with full under set and matching boots. \
            Set includes: Under Set, Helmet, Complete Body Guard, Complete Shoulder And Arm Guard, \
            Gloves & Hand Guard, Complete Leg Guard, Boots",
            picture : "../../../pictures/deathstroke_armour.png",
            quantity: 0,
        },
        {
            id : "56fg",
            name : "White Queen Ball Gown",
            price : 135,
            tag : "New item",
            description : "White Queen's dress set in Satin with soft Organza Tulle over-layer. \
            Form fitting bodice with pearl strands and white, floral lace accents. \
            Double layer dress with slight drape on the back. Set includes: Neckband, Dress Set, Matching Petticoat",
            picture : "../../../pictures/white_queen_dress.png",
            quantity: 0,
        },
        {
            id : "67gh",
            name : "Merida wig",
            price : 39.99,
            tag : "New item",
            description : "Disney Brave's readhead cosplay wig. Merida's wild red curly hair is \
            her most recognizable feature. Free trim/styling requests available. Set includes: Wig and Matching Hair Net",
            picture : "../../../pictures/Merida_wig.png",
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