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
      userNameValue: '',
      passwordValue: '',
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

  logout(e) {
    cookie.setItem('secretKey', '');
    cookie.setItem('userType', '');
    this.setState({
        loggedIn: false,
        userNameValue: '',
        passwordValue: ''
      });
  }
/*
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
  }*/

  loginNgo(e) {
    cookie.setItem('secretKey', 'allowmein');
    cookie.setItem('userType', 'ngo');
        this.setState({
        loggedIn: true,
      });
      console.log('1');
  }

  loginLawFirmCoordinator(e) {
    cookie.setItem('secretKey', 'allowmein');
    cookie.setItem('userType', 'coordinator');
    this.setState({
        loggedIn: true,
      });
    console.log('2');
    }

  loginLawyer(e) {
    cookie.setItem('secretKey', 'allowmein');
    cookie.setItem('userType', 'lawyer');
    this.setState({
        loggedIn: true,
      });
    console.log('3');
    }

    loginUser(e) {
      if (this.state.userNameValue === 'ngo') {
        cookie.setItem('secretKey', 'allowmein');
        cookie.setItem('userType', 'ngo');
        this.setState({
          loggedIn: true,
        });
      } else
      if (this.state.userNameValue === 'coordinator') {
        cookie.setItem('secretKey', 'allowmein');
        cookie.setItem('userType', 'coordinator');
        this.setState({
          loggedIn: true,
        });
      } else
      if (this.state.userNameValue === 'lawyer') {
        cookie.setItem('secretKey', 'allowmein');
        cookie.setItem('userType', 'lawyer');
        this.setState({
          loggedIn: true,
        });
      } 
      }
  

      updateUserNameValue(evt) {
        this.setState({
          userNameValue: evt.target.value
        });
      }

      updatePasswordValue(evt) {
        this.setState({
          passwordValue: evt.target.value
        });
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
      //return <Redirect push={false} to={this.onLoginRedirectUrl} />;
      if (this.state.userNameValue === 'ngo')
        return (<div>
            <p>Welcome NGO user</p>
            <button type="submit" className="button is-link margin-right-5px" onClick={e => this.logout(e)}>Logout</button>
            </div>)
      else    
      if (this.state.userNameValue === 'coordinator')
        return (<div>
            <p>Welcome Coordinator user</p>
            <button type="submit" className="button is-link margin-right-5px" onClick={e => this.logout(e)}>Logout</button>
            </div>)
      else    
      if (this.state.userNameValue === 'lawyer')
        return (<div>
            <p>Welcome Lawyer user</p>
            <button type="submit" className="button is-link margin-right-5px" onClick={e => this.logout(e)}>Logout</button>
            </div>)
        else return (<div>
          <button type="submit" className="button is-link margin-right-5px" onClick={e => this.logout(e)}>Logout</button>
          </div>)
    }
    return (
        <div>
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
                      defaultValue=""
                      id="username"
                      name="username"
                      className={`input`}
                      type="text"
                      placeholder="Username input"
                      value={this.state.userNameValue}
                      onChange={evt => this.updateUserNameValue(evt)}
                    />
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="label" htmlFor="password">
                  password
                  <div className="control">
                    <input
                      defaultValue=""
                      id="password"
                      name="password"
                      className={`input`}
                      type="password"
                      placeholder="Password input"
                      value={this.state.passwordValue}
                      onChange={evt => this.updatePasswordValue(evt)}
                    />
                  </div>
                </label>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button type="submit" className="button is-link margin-right-5px" onClick={e => this.loginUser(e)}>Login</button>
                  <button type="submit" className="button is-link margin-right-5px" onClick={e => this.loginNgo(e)}>NGO Login</button>
                  <button type="submit" className="button is-link margin-right-5px" onClick={e => this.loginLawFirmCoordinator(e)}>Law firm Coordinator Login</button>
                  <button type="submit" className="button is-link" onClick={e => this.loginLawyer(e)}>Lawyer</button>
                </div>
              </div>
        </div>
        </section>
        </div>
    );
  }
}
