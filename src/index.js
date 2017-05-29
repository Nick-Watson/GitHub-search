import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import ResultsPage from './components/ResultsPage';

ReactDOM.render(
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='/:searchTerm' component={ResultsPage} />
        </Route>
      </Router>,
  document.getElementById('app'));