import React, { Component } from 'react';

require('./styles/app.scss');

import SearchBox from './components/SearchBox';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import Breadcrumb from './components/Breadcrumb';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBox />
                <Breadcrumb />
                <ItemList />
                <ItemDetail />
            </div>
        );
    }
}
