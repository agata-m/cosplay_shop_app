/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

const ModalAddToCart = ( props ) => {

    const { buttonLabel, className } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button variant='primary' onClick={toggle}>Add to cart {buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Item has been added to cart!</ModalHeader>
                <ModalFooter>
                    <Button color='primary' onClick={toggle}>Continue shopping</Button>{' '}
                    <Button color='secondary' onClick={toggle}>Go to cart</Button>
                </ModalFooter>  
            </Modal>
        </div>
        
    );
}

export default ModalAddToCart;