/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from '../../common/Button/Button';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import uuid from 'uuid';

const ModalOrderSummary = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    let orderId = uuid();

    return (
        <div className='modal-order-summary'>
            <Button variant='primary' onClick={toggle}>Go to checkout</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader>Payment details</ModalHeader>
                <ModalBody>
                    <SectionTitle>Your order id is<br/>{orderId}</SectionTitle><br/>
                    <div>
                        <b>CosCrafts Ltd</b><br/>
                        Platform 9 3/4<br/>
                        King's Cross Station<br/>
                        London, UK<br/><br/>
                        <b>2960161331926819</b><br/>
                        Bank of England<br/><br/>
                        <b>Title:</b> {orderId}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button variant='danger' onClick={toggle}>Cancel</Button>
                    <Button variant='primary' onClick={toggle}>Confirm and buy</Button>
                </ModalFooter>  
            </Modal>
        </div>
        
    );
    
}

export default ModalOrderSummary;