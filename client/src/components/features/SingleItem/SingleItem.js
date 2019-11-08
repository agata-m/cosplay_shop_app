import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';
import loadSingleItem from '../../../redux/redux';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';

class SingleItem extends React.Component {
    componentDidMount() {
        const { resetRequest, match } = this.props;
        resetRequest();
        loadSingleItem(match.params.id);
        console.log(match.params.id);
    }

    render() {
        const { items, request } = this.props;
        console.log(items.id);

        if(request.pending === false && request.success === true && items.length > 0) {
            return (
                <div>
                    <img src={`${items.picture}`} alt='' />
                    <SectionTitle>{items.name}</SectionTitle>
                    <HtmlBox>{items.price}</HtmlBox>
                    <HtmlBox>{items.description}</HtmlBox>
                    <Button variant='primary'>
                        <NavLink to='/cart'>Add to cart</NavLink>
                    </Button>
                </div>
            );  

        } else if(request.pending === true || request.success === null) {
            return <Spinner />

        } else if(request.pending === false && request.error != null) {
            return <Alert variant='error'>Error: {request.error}</Alert> 
        } else {
            return <Alert variant='error' />
        };
    }
}

SingleItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
        })
    ),
    loadSingleItem: PropTypes.func.isRequired,
};

export default withRouter(props => <SingleItem {...props} />);