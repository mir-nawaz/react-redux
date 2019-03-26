import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/menu/Routes';

import jQuery from 'jquery';
window.$ = jQuery;

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <Routes/>
        </div>
      </Router>
    );
  }
}
