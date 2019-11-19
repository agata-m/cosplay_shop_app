import React from 'react';
import { PropTypes } from 'prop-types';

import ItemSummary from '../ItemSummary/ItemSummary';

const ItemsList = ({ items }) => (

    <div className='items-list'>
        {items.map(item => <ItemSummary key={item.id} {...item} />)}
    </div>
    
);

ItemsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            picture: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ),
};

export default ItemsList;