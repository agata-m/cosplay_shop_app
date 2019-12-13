import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import CartItem from './CartItem';
import CheckDiscountCode from '../CheckDiscountCode/CheckDiscountCode';

import { Container, Row } from 'reactstrap';
import './Cart.scss';


class Cart extends React.Component {

    handleAddDiscount = () => {
        const { addDiscountCode, calculatePrice } = this.props;
        addDiscountCode();
        calculatePrice();
    }

    render() {
        const { cart, price, discountStatus } = this.props;

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

                        <CheckDiscountCode
                                discountStatus={discountStatus}
                                handleAddDiscount={this.handleAddDiscount}
                        /> 

                        <SectionTitle>Total: £{price.toFixed(2)}</SectionTitle>
                        
                        {cart.length !== 0 ?
                            <Link to={'summary'}>
                                <Button variant='primary' className='button-buy'>Summary</Button>
                            </Link> :
                            <Button variant='danger' disabled>Summary</Button>
                        }
                        
                    </Row>
                </Container>
            )

        } else {
            return <Alert variant='info'>Your shopping cart is empty!</Alert>
        }
        
    }
}

export default Cart;