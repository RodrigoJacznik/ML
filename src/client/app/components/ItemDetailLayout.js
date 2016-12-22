import React, { Component } from 'react';
import { connect } from 'react-redux';

import { itemDetailRequest } from '../actions';
import Breadcrumb from './Breadcrumb';
import ItemDetail from './ItemDetail';

class ItemListLayout extends Component {
    constructor (props) {
        super(props);
        this.fetchItem = this.fetchItem.bind(this);
    }

    fetchItem (id) {
        this.props.itemDetailRequest(id);
    }

    componentWillMount () {
        this.fetchItem(this.props.itemId);
    }

    render () {
        return (
            <div>
                <Breadcrumb links={this.props.categories}/>
                <ItemDetail {...this.props.item}/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    itemId: props.router.params.id,
    item: state.itemDetail,
    categories: state.categories
});

export default connect(mapStateToProps, { itemDetailRequest })(ItemListLayout);
