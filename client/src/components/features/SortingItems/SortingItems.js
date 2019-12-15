import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from '../../common/SectionTitle/SectionTitle';

import './SortingItems.scss';


const SortingItems = ({ sortItems }) => {

    const handleSortItems = (key, direction) => {
        sortItems({ key, direction });
    };

    return (
        <div className='sorting-container'>
            <SectionTitle>Sort by:</SectionTitle>
            <ul className='sorting-options-list'>
                <li onClick={() => handleSortItems('name', 'asc')}>
                    <i className="fas fa-arrow-up"></i>
                    <p>Name</p> 
                </li>
                <li onClick={() => handleSortItems('name', 'desc')}>
                    <i className="fas fa-arrow-down"></i>
                    <p>Name</p>
                </li>
                <li onClick={() => handleSortItems('price', 'asc')}>
                    <i className="fas fa-arrow-up"></i>
                    <p>Price</p>
                </li>
                <li onClick={() => handleSortItems('price', 'desc')}>
                    <i className="fas fa-arrow-down"></i>
                    <p>Price</p>  
                </li>
            </ul>
        </div>
    )
}

SortingItems.propTypes = {
    sortItems: PropTypes.func.isRequired
};

export default SortingItems;