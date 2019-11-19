import { connect } from 'react-redux';
import { getItemsCount, getCart, getTotalPrice, deleteFromCart, addItemQuantity, minusItemQuantity, calculatePrice } from '../../../redux/redux';

import CountingItems from './CountingItems';

const mapStateToProps = state => ({
    count: getItemsCount(state),
    cart: getCart(state),
    price: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    addItemQuantity: (id) => dispatch(addItemQuantity(id)),
    minusItemQuantity: (id) => dispatch(minusItemQuantity(id)),
    calculatePrice: () => dispatch(calculatePrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountingItems);