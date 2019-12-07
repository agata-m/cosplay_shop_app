/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import Button from '../../common/Button/Button';
import CheckDiscountCode from './CheckDiscountCode';

const ModalDiscountCode = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className='modal-discount'>
            <Button variant='primary' onClick={toggle}>Discount code</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <CheckDiscountCode />
            </Modal>
        </div>
    );
    
}

export default ModalDiscountCode;