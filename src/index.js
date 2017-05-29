import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducer/index.reducer';
import App from './components/App';
import ResultsPage from './components/ResultsPage';

const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='/:searchTerm' component={ResultsPage} />
        </Route>
      </Router>
    </Provider>,
  document.getElementById('app'));