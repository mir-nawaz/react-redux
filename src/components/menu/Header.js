import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.history.location.pathname || this.props.menu.home.url
    }
  }

  componentWillMount() {
    this.props.history.listen(() => {
      this.setState({active: this.props.history.location.pathname});
    });
  }

  render() {
    return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          {
            Object.keys(this.props.menu).map((item) => {
              return (
                <li className={this.state.active === this.props.menu[item].url ? 'nav-item active' : 'nav-item'} key={item}>
                  <Link to={this.props.menu[item].url} className='nav-link'>{this.props.menu[item].label}</Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </nav>
    );
  }
}

export default withRouter(Header);