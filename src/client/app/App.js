import React, { Component } from 'react';

require('./styles/app.less');

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
