import React from 'react';
import { PropTypes } from 'prop-types';

import cutText from '../../../utils/cutText';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import CountingItemsContainer from '../CountingItems/CountingItemsContainer';

import { Row } from 'reactstrap';
import './CartItem.scss';

const CartItem = (props) => {
    const { items, handleDeleteItem, handleAddItemQuantity, handleMinusItemQuantity, calculateTotalPrice } = props;
    
    return (
        <Row className='cart-item-row'>
            <img src={`${items.picture}`} alt='' />
            <div className='cart-item-desc'>
                <SectionTitle>{items.name}</SectionTitle>
                <HtmlBox>{cutText(items.description, 150)}</HtmlBox>
                <div>£{items.price}</div>
            </div>
            <CountingItemsContainer
                items={items}
                handleDeleteItem={handleDeleteItem}
                handleAddItemQuantity={handleAddItemQuantity}
                handleMinusItemQuantity={handleMinusItemQuantity}
            />
        </Row>
        
    );
    
};

CartItem.propTypes = {
    items: PropTypes.object.isRequired,
};

export default CartItem;