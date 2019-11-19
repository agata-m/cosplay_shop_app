import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import CartContainer from '../../features/Cart/CartContainer';

const CartPage = () => (
    <div>
        <PageTitle>Your cart</PageTitle>
        <CartContainer />
    </div>
);

export default CartPage;