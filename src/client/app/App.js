import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

require('./styles/app.scss');

import MainLayout from './components/MainLayout';
import ItemListLayout from './components/ItemListLayout';
import ItemDetailLayout from './components/ItemDetailLayout';

export default class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={MainLayout}>
                    <Route path="/search" component={ItemListLayout} />
                    <Route path="/item" component={ItemDetailLayout} />
                </Route>
            </Router>
        );
    }
}
