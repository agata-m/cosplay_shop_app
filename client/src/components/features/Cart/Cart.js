import React from 'react';

import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import CartItem from './CartItem';
import ModalDiscountCode from '../ModalDiscountCode/ModalDiscountCode';

import { Container, Row } from 'reactstrap';
import './Cart.scss';


class Cart extends React.Component {

    handleAddDiscount = () => {
        const { addDiscountCode, calculatePrice } = this.props;
        addDiscountCode();
        calculatePrice();
    }

    render() {
        const { cart, price, discountCodeStatus } = this.props;

        if(cart.length !== 0) {
            return (
                <Container className='cart-body'>
                    <div className='item-row'>

                        {cart.map(item =>
                            <CartItem
                                items={item}
                                key={item.id}
                                handleDeleteItem={this.handleDeleteItem}
                            />)
                        }
                        
                    </div>
                    <Row className='order-total'>
                        <ModalDiscountCode />
                        <SectionTitle>Total: £{price.toFixed(2)}</SectionTitle>
                        <Button variant='primary' className='button-buy'>Buy</Button>
                    </Row>
                </Container>
            )

        } else {
            return <Alert variant='info'>Your shopping cart is empty!</Alert>
        }
        
    }
}

export default Cart;