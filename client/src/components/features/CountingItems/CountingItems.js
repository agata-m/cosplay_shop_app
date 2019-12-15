import React from 'react';

import Button from '../../common/Button/Button';

import './CountingItems.scss';

class CountingItems extends React.Component {

    handleDeleteItem = () => {
        const { items, deleteFromCart, calculatePrice } = this.props;
        deleteFromCart(items.id);
        calculatePrice();
    }

    handleAddItemQuantity = () => {
        const { items, addItemQuantity, calculatePrice } = this.props;
        addItemQuantity(items.id);
        calculatePrice();
    }

    handleMinusItemQuantity = () => {
        const { items, minusItemQuantity, deleteFromCart, calculatePrice } = this.props;

        if(items.quantity === 1) {
            deleteFromCart(items.id);
        } else {
            minusItemQuantity(items.id);
        };

        calculatePrice();
    }

    render() {

        const { items } = this.props;

        return (
            <div className='item-counter'>
                <div className='item-counter-actions'>
                    <Button variant='secondary' onClick={ this.handleMinusItemQuantity }>–</Button>
                    <div>{items.quantity}</div>
                    <Button variant='secondary' onClick={ this.handleAddItemQuantity }>+</Button>
                </div>
                <Button variant='danger' onClick={ this.handleDeleteItem }>Remove item</Button>
            </div>
        );
    }
}

export default CountingItems;