import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AutoSuggestion from './components/views/AutoSuggestion';
import MyTournament from './components/views/MyTournament';
import Apper from './components';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          {/*<MyTournament />
          <AutoSuggestion />*/}
          <Apper />
        </Fragment>
      </Provider>
    )
  }
}


export default App