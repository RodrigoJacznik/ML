import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import { searchItemsRequest } from '../actions';

class MainLayout extends Component {
    constructor (props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }

    componentWillMount() {
        let term = this.props.location
            .search.match(/\?search=(.*)(&.*)?/);

        if (term && term[1]) {
            term = decodeURIComponent(term[1]);
            this.props.searchItemsRequest(term);
        }
    }

    onSearch (term) {
        this.props.searchItemsRequest(term);
        this.props.router.push(`/items?search=${term}`);
    }

    render() {
        return (
            <div>
                <SearchBox onSearch={this.onSearch} />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default connect(null, { searchItemsRequest })(MainLayout);

