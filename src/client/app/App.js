import React, { Component } from 'react';

require('./styles/app.scss');

import SearchBox from './components/SearchBox';

export default class App extends Component {
  render() {
    return (
        <div>
            <SearchBox />
        </div>
    );
  }
}
