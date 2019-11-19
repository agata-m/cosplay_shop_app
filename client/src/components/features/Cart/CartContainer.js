import { connect } from 'react-redux';
import { deleteFromCart, getCart, getTotalPrice, addItemQuantity, minusItemQuantity, calculatePrice } from '../../../redux/redux';
import Cart from './Cart';

const mapStateToProps = state => ({
    cart: getCart(state),
    price: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    addItemQuantity: (id) => dispatch(addItemQuantity(id)),
    minusItemQuantity: (id) => dispatch(minusItemQuantity(id)),
    calculatePrice: () => dispatch(calculatePrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);