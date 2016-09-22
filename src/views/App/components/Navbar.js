import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import 'styles/components/Navbar.css';

class Navbar extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    const { session } = this.props;
    return (
        <nav>
            <Link to="/" className="navbar-brand">Project name</Link>
            <div>{session.isAuthenticated ? this._renderUserDropdown() : this._renderSigninSignupButtons()}</div>
        </nav>
    );
  }

  _renderUserDropdown() {
    const { session } = this.props;
    const { router } = this.context;
    return (
      <ul>
        <li>
          <a href="#">{session.user.email}</a>
          <ul>
            <li><a href="#" onClick={(e) => {
              e.preventDefault();
              router.transitionTo('signout');
            }}>Signout</a></li>
          </ul>
        </li>
      </ul>
    );
  }

  _renderSigninSignupButtons() {
    const { router } = this.context;
    return (
      <ul>
        <li><button type="button" onClick={() => router.transitionTo('detail')}>Detail</button></li>

        <li><button type="button" onClick={() => router.transitionTo('login')}>Sign in</button></li>
        <li><button type="button" onClick={() => router.transitionTo('signup')}>Sign up</button></li>
      </ul>
    );
  }
}

export default connect(state => {
  return { session: state.session };
})(Navbar);
