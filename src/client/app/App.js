import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

require('./styles/app.scss');

import MainLayout from './components/MainLayout';
import ItemListLayout from './components/ItemListLayout';
import ItemDetailLayout from './components/ItemDetailLayout';

const App = ({ store }) => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={MainLayout}>
                    <Route path="/items" component={ItemListLayout} />
                    <Route path="/items/:id" component={ItemDetailLayout} />
                </Route>
            </Router>
        </Provider>
    );
};

export default App;
