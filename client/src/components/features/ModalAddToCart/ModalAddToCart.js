/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalFooter } from 'reactstrap';
import Button from '../../common/Button/Button';

const ModalAddToCart = ( props ) => {

    const { buttonLabel, className } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button variant='primary' onClick={toggle}>Add to cart</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Item has been added to cart!</ModalHeader>
                <ModalFooter>
                    <Link to='/'>
                        <Button variant='primary' onClick={toggle}>Continue shopping</Button>
                    </Link>
                    <Link to='/cart'>
                        <Button variant='secondary' onClick={toggle}>Go to cart</Button>
                    </Link>
                </ModalFooter>  
            </Modal>
        </div>
        
    );
}

export default ModalAddToCart;