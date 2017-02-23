import React, { Component } from 'react';
import { 
  Router, 
  hashHistory, 
} from 'react-router';

import Home from './home';

const componentRoutes = {
  component: Container,
  path: '/',
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: '/address',
      getComponent(location, cb) {
        System.import('./address')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('./notfound')
          .then(module => cb(null, module.default));
      }
    },
  ]
};

class App extends Component {
  render() {
    return (
      <Router history={hashHistory} routes={componentRoutes} />
    );
  }
}

const Container = () => <div />;

export default App;
