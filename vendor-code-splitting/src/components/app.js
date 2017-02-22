import React, { Component } from 'react';
import { 
  Router, 
  Route, 
  IndexRoute, 
  hashHistory, 
} from 'react-router';

import Nav from './nav';
import NotFound from './notfound';
import Home from './home';
import Address from './address';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/address' component={Address} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>;

export default App;
