import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import store from './store';
import { Provider } from 'react-redux';


import HomePage from './pages/HomePage';
import Loading from './components/Loading';

const NotFoundPage = Loadable({
  loader: () => import(/* webpackChunkName:'NotFoundPage' */ './pages/NotFoundPage'),
  loading: Loading
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
};

export default hot(module)(App);