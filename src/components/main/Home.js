import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUser } from './../../redux/actions/userActions';
import { fetchTweets } from './../../redux/actions/tweetsActions';


export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
    userFetched: PropTypes.bool,
    tweets: PropTypes.array
  };

  render() {
    return (<div id="wrapper" className="gray-bg">
      <div className="middle-box text-center loginscreen animated fadeInDown" style={{ height: '100vh' }}>
        <h3>Welcome to True API</h3>
        <p>Login in. To see it in action.</p>
        <form className="m-t" role="form" action="#">
          <div className="form-group">
            <input type="email" name="email" className="form-control" placeholder={'Email'} required=""/>
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder={'Password'} required=""/>
          </div>

          <div className="form-group">
            <p> hello world </p>
          </div>
          <button type="button" id="btnLogin" className="btn btn-primary block full-width m-b">{'Login'}</button>
          <a href="#">
            <small>ForgotPassword</small>
          </a>
          <p className="text-muted text-center">
            <small>Donothaveanaccount</small>
          </p>
          <a className="btn btn-sm btn-white btn-block" href="#">CreateAnAccount</a>
          <a className="btn btn-sm btn-white btn-block" href="#">ActivateAccount</a>
        </form>
        <p className="m-t">
          <small>&copy; 2019 Avanza Solutions. All rights reserved</small>
        </p>
      </div>
    </div>);
  }

  fetchTweets = () => {
    this.props.dispatch(fetchTweets());
  };
}

