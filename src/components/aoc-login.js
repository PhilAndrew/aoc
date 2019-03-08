import React from 'react';
import { Redirect } from 'react-router-dom';
import GuestLayout from './guest-layout';
import cookie from '../libs/cookie';
import Authenticator from './fake-authenticator';

export default class AocLogin extends React.Component {
  onLoginRedirectUrl = '/';

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
      error: '',
      errorMsg: '',
    };
  }

  componentDidMount() {
    const isLoggedIn = Authenticator.isLoggedIn();
    if (isLoggedIn) {
      this.setState({
        loaded: true,
        loggedIn: true,
      });
    } else {
      this.setState({
        loaded: true,
      });
    }
  }

  handleSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const loginData = new FormData(e.target);
    const username = loginData.get('username');
    const password = loginData.get('password');
    if (username !== 'demo' || password !== 'demo') {
      this.setState({
        error: username !== 'demo' ? 'username' : 'password',
        errorMsg: 'Please use username:password as demo:demo',
      });
    } else {
      cookie.setItem('secretKey', 'allowmein');
      this.setState({
        loggedIn: true,
      });
    }
  }

  render() {
    const {
      loggedIn,
      error,
      errorMsg,
      loaded,
    } = this.state;
    if (!loaded) return null;
    if (loggedIn) {
      return <Redirect push={false} to={this.onLoginRedirectUrl} />;
    }
    return (
        <section className="row">
        <div className="col-md-4 section_title animated wow fadeInUp">
                <h2>User login.</h2>
              </div>          
        <div className="col-md-6">
        <div className="field">
                <label className="label" htmlFor="username">
                  username
                  <div className="control">
                    <input
                      defaultValue="User name"
                      id="username"
                      name="username"
                      className={`input`}
                      type="text"
                      placeholder="Username input"
                    />
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="label" htmlFor="password">
                  password
                  <div className="control">
                    <input
                      defaultValue="Password"
                      id="password"
                      name="password"
                      className={`input`}
                      type="password"
                      placeholder="Password input"
                    />
                  </div>
                </label>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button type="submit" className="button is-link margin-right-5px">NGO Login</button>
                  <button type="submit" className="button is-link margin-right-5px">Law firm Coordinator Login</button>
                  <button type="submit" className="button is-link">Lawyer</button>
                </div>
              </div>
        </div>
        </section>
    );
  }
}
