import React from 'react';

import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import CartItem from './CartItem';

import { Container, Row } from 'reactstrap';
import './Cart.scss';

class Cart extends React.Component {

    render() {
        const { cart, price } = this.props;

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
                        <div>
                            <input placeholder='discount code'></input>
                            <Button variant='primary'>Discount code</Button>
                        </div>
                        <div>Total: £{price.toFixed(2)}</div>
                        <Button variant='primary'>Buy</Button>
                    </Row>
                </Container>
            )

        } else {
            return <Alert variant='info'>Your shopping cart is empty!</Alert>
        }
        
    }
}

export default Cart;