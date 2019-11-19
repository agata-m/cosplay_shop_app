import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from '../../common/SectionTitle/SectionTitle';

import './SortingItems.scss';


const SortingItems = ({ sortItems }) => {

    const handleSortItems = (key, direction) => {
        sortItems({ key, direction });
        console.log(key, direction);
    };

    return (
        <div className='sorting-container'>
            <SectionTitle>Sort by:</SectionTitle>
            <ul className='sorting-options-list'>
                <li onClick={() => handleSortItems('name', 'asc')}>
                    <p>Name</p>
                    <i className="fas fa-arrow-up"></i>
                </li>
                <li onClick={() => handleSortItems('name', 'desc')}>
                    <p>Name</p>
                    <i className="fas fa-arrow-down"></i>
                </li>
                <li onClick={() => handleSortItems('price', 'asc')}>
                    <p>Price</p>
                    <i className="fas fa-arrow-up"></i>
                </li>
                <li onClick={() => handleSortItems('price', 'desc')}>
                    <p>Price</p>   
                    <i className="fas fa-arrow-down"></i>
                </li>
            </ul>
        </div>
    )
}

SortingItems.propTypes = {
    sortItems: PropTypes.func.isRequired
};

export default SortingItems;