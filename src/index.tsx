import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './pages/home/App';
import Cart from './pages/cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/test" component={Cart} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
