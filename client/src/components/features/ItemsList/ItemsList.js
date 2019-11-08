import React from 'react';
import { PropTypes } from 'prop-types';

import ItemSummary from '../ItemSummary/ItemSummary';

const ItemsList = ({ items }) => (
    <div>
        <section className='items-list'>
            {items.map(item => <ItemSummary key={item.id} {...item} />)}
        </section>
    </div>
);

ItemsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
        })
    ),
};

export default ItemsList;