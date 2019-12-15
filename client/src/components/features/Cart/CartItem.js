import React from 'react';
import { Link } from 'react-router-dom';

import cutText from '../../../utils/cutText';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import CountingItemsContainer from '../CountingItems/CountingItemsContainer';

import { Row, Col } from 'reactstrap';
import './CartItem.scss';

const CartItem = (props) => {
    const { items, handleDeleteItem, handleAddItemQuantity, handleMinusItemQuantity } = props;
    
    return (
        <Row className='cart-item-row'>
            <Col xs='0' sm='0' md='3' lg='3' xl='3' className='img-col'>
                <Link to={`/items/${items.id}`}>
                    <img src={`${items.picture}`} alt='' />
                </Link>
            </Col>
            <Col xs='9' sm='9' md='7' lg='7' xl='7' className='cart-item-desc'>
                <Link to={`/items/${items.id}`}>
                    <SmallTitle>{items.name}</SmallTitle>
                </Link>
                <SectionTitle>£{items.price}</SectionTitle>
                <HtmlBox>{cutText(items.description, 150)}</HtmlBox>
            </Col>
            <Col xs='3' sm='3' md='2' lg='2' xl='2' className='counting-items-col'>
                <CountingItemsContainer
                    items={items}
                    handleDeleteItem={handleDeleteItem}
                    handleAddItemQuantity={handleAddItemQuantity}
                    handleMinusItemQuantity={handleMinusItemQuantity}
                />
            </Col>
        </Row>
        
    );
    
};

export default CartItem;