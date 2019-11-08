import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

import './ItemSummary.scss';

const ItemSummary = ({ id, name, price, deal, picture }) => (
    <div className="item-summary">
        <NavLink to={`/items/${id}`}>
            <HtmlBox>{deal}</HtmlBox>
            <SmallTitle>{name}</SmallTitle>
            <HtmlBox>{price}</HtmlBox>
            <img src={`${picture}`} alt=''/>
        </NavLink>
        <Button variant='primary'>
            <NavLink to='/cart'>Add to cart</NavLink>
        </Button>
    </div>
    
);

ItemSummary.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    deal: PropTypes.string,
    picture: PropTypes.string,
};

export default ItemSummary;