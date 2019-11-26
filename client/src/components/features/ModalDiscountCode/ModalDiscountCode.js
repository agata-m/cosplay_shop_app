/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import Button from '../../common/Button/Button';

class ModalDiscountCode extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    render() {
        //const { className } = props;
        const [modal, setModal] = useState(false);
        const toggle = () => setModal(!modal);
    
        return (
            <div className='modal-discount'>
                <Button variant='primary' onClick={toggle}>Discount code</Button>
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalBody>
                        <Label>Your discount code:</Label>
                        <Input placeholder='dicount code' disabled='disabled'></Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='danger' onClick={toggle}>Cancel</Button>
                        <Button variant='primary' onClick={toggle}>Go to cart</Button>
                    </ModalFooter>  
                </Modal>
            </div>
            
        );
    }
    
}

export default ModalDiscountCode;