import React from 'react';
import { ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';

class CheckDiscountCode extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            isDiscountCorrect: true
        }
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = () => {
        const { discount, handleDiscountCode, discountStatus } = this.props;
        const discountCode = 'coscrafts';

        if(discountStatus === true) {
            if(discount === discountCode) {
                handleDiscountCode();
            } else {
                this.setState({
                    isDiscountCorrect: false
                })
            }
        }
    }
    

    render() {
        

        const { inputValue, isDiscountCorrect } = this.state;
        const { discountStatus } = this.props;
        const { handleChange, handleSubmit } = this;        

        return (
            <div>
                <ModalBody>
                    <Label>Enter 'coscrafts' to get a 10% discount for your first order!</Label>
                    <Input placeholder='discount code'></Input>
                </ModalBody>
                <ModalFooter>
                    <Button variant='danger'>Cancel</Button>
                    <Button variant='primary' onClick={ handleSubmit }>Go to cart</Button>
                </ModalFooter>
            </div>
            
        );
    }
}

export default CheckDiscountCode;