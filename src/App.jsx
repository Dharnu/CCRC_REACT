import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DocRepoApp from './features/documentRepository/components/DocRepoApp'  ;
import {fetchDocRepo} from './features/documentRepository/actions/index'; 

import configureStore from './features/documentRepository/store/configureStore';
var {Provider} = require('react-redux');
const DocRepoStore = configureStore();

DocRepoStore.dispatch(fetchDocRepo());
DocRepoStore.subscribe(()=>{console.log(DocRepoStore.getState());});


class App extends Component {
  render() {
    return (
        <Provider store={DocRepoStore}>
            <DocRepoApp/>
        </Provider>
    )
  }
};

  ReactDOM.render(<App />, document.getElementById('root'));
