import React from 'react';
import { Redirect } from 'react-router-dom';
import GuestLayout from './guest-layout';
import cookie from '../libs/cookie';
import Authenticator from './fake-authenticator';
import HomepageJpeg from '../resources/img/homepage.jpeg';

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

    window.location.reload();
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
      if (this.state.userNameValue.toLowerCase() === 'ngo') {
        cookie.setItem('secretKey', 'allowmein');
        cookie.setItem('userType', 'ngo');
        this.setState({
          loggedIn: true,
        });
      } else
      if (this.state.userNameValue.toLowerCase() === 'coordinator') {
        cookie.setItem('secretKey', 'allowmein');
        cookie.setItem('userType', 'coordinator');
        this.setState({
          loggedIn: true,
        });
      } else
      if (this.state.userNameValue.toLowerCase() === 'lawyer') {
        cookie.setItem('secretKey', 'allowmein');
        cookie.setItem('userType', 'lawyer');
        this.setState({
          loggedIn: true,
        });
      }
      console.log('hi');
      window.location.reload();
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
            <button type="submit" className="button is-link margin-right-5px login-button" onClick={e => this.logout(e)}>Logout</button>
            </div>)
      else
      if (this.state.userNameValue === 'coordinator')
        return (<div>
            <p>Welcome Coordinator user</p>
            <button type="submit" className="button is-link margin-right-5px login-button" onClick={e => this.logout(e)}>Logout</button>
            </div>)
      else
      if (this.state.userNameValue === 'lawyer')
        return (<div>
            <p>Welcome Lawyer user</p>
            <button type="submit" className="button is-link margin-right-5px login-button" onClick={e => this.logout(e)}>Logout</button>
            </div>)
        else return (<div>
          <button type="submit" className="button is-link margin-right-5px login-button" onClick={e => this.logout(e)}>Logout</button>
          </div>)
    }
    return (
        <div>
        <section className="row">
          <div className="col-md-9 section_title animated wow fadeInUp">
            <div className="row">
              <div className="col-md-12">
                <h1 style={{ float: 'left', fontSize: '23pt'}}>Access Our Community</h1>
                <div style={{ float: 'right', width: '400px', backgroundImage: `url(${HomepageJpeg})`, opacity: '0.8', backgroundPosition: 'right -460px top -340px', boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.9) inset', height: '220px', marginLeft: '0.2em' }} />
                <p style={{ marginTop: '40px' }}>
                We enable legal services nonprofits and pro bono clearinghouses improve access to justice for their communities by connecting their clients with pro bono lawyers.
                </p>
                </div>
              </div>
              </div>
        <div className="col-md-3">
        <div className="user-login-area">
        <div className="field">
                <label className="label" htmlFor="username">
                  Username
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
                  Password
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
                  <button type="submit" className="button is-link margin-right-5px login-button" onClick={e => this.loginUser(e)}>Login</button>
                </div>
              </div>
              </div></div>

        </section>

        <section className="row" style={{ marginTop: '100px'}}>

        <div className="col-md-4" style={{ padding: '20px'}}>
        <div className="row user-login-area-border" style={{ height: '200px' }}>
        <p>
        <h1 className="homepageSubtitle">For Non-Profit</h1>
        <div><p>Connect your pro bono clients with your trusted pro bono legal partners.</p></div>
        </p>
        </div>
        </div>

        <div className="col-md-4" style={{ padding: '20px'}}>
        <div className="row user-login-area-border" style={{ height: '200px' }}>
        <p>
        <h1 className="homepageSubtitle">For Lawyer</h1>
        <div><p>Share your legal skills for the good of your community.</p></div>
        </p>
        </div>
        </div>

        <div className="col-md-4" style={{ padding: '20px'}}>
        <div className="row user-login-area-border" style={{ height: '200px' }}>
        <p>
        <h1 className="homepageSubtitle">For Law Firms/Corporate</h1>
        <div><p>Enable your lawyers to effectively engage in pro bono services.</p></div>
        </p>
        </div>
        </div>
        </section>

        </div>
    );
  }
}
