import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import Button from '../../common/Button/Button';

import { Container, Col, Modal, ModalHeader, ModalFooter, Badge } from 'reactstrap';
import './SingleItem.scss';


class SingleItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }

        this.showModal = this.showModal.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    showModal() {
        this.setState({
            isModalOpen: true
        });
    }

    componentDidMount() {
        const { loadSingleItem, match } = this.props;
        loadSingleItem(match.params.id); 
    }

    handleAddToCart = () => {
        const { items, cart, addToCart, addItemQuantity, calculatePrice, match } = this.props;
        const isInCart = cart.filter(item => item.id === match.params.id);

        if(isInCart.length === 0) {
            addToCart(items);
        } else {
            addItemQuantity(match.params.id);
        };

        calculatePrice();
        this.toggle();
    }

    render() {
        const { items, request } = this.props;

        if(request.pending === false && request.success === true) {
            

            return (
                <Container className='single-item-container'> 
                    <Col className='single-item-photo'>
                        <img src={`${items.picture}`} alt='' />
                    </Col>
                    <Col className='single-item-desc'>
                        <Badge color="secondary">{items.tag}</Badge>
                        <SmallTitle>{items.name}</SmallTitle>
                        <SectionTitle>£{items.price}</SectionTitle>
                        <HtmlBox>{items.description}</HtmlBox>

                        <Button variant='primary' onClick={this.handleAddToCart}>Add to cart</Button>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>Item has been added to cart!</ModalHeader>
                            <ModalFooter>
                                <Link to='/'>
                                    <Button variant='primary' onClick={this.toggle}>Continue shopping</Button>
                                </Link>
                                <Link to='/cart'>
                                    <Button variant='secondary' onClick={this.toggle}>Go to cart</Button>
                                </Link>
                            </ModalFooter>  
                        </Modal>

                    </Col>
                </Container>
                
            );  

        } else if(request.pending === true) {
            return <Spinner />

        } else if(request.pending === false && request.error != null) {
            return <Alert variant='error'>{request.error}</Alert> 
        } else {
            return <Alert variant='error'>Ups! Something went wrong :(</Alert>
        };
    }
}

SingleItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ),
    loadSingleItem: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    addItemQuantity: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
};

export default withRouter(props => <SingleItem {...props} />);