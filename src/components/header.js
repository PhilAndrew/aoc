import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import User from '../resources/img/user.png';
import cookie from '../libs/cookie';
// import SearchBar from './search-bar';
import Authenticator from './fake-authenticator';
import Logo from '../resources/img/logo.png';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      search: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.search);
    event.preventDefault();
  }

  toggleMenuBar = (e) => {
    const { open } = this.state;
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({
      open: !open,
    });
  }

  closeMenuBar = () => {
    this.setState({ open: false });
  }

  myWhat = () => {
    const isLoggedIn = Authenticator.isLoggedIn();
    if (isLoggedIn) {
      let userType = 'User';
      if (cookie.getItem('userType') === 'ngo') userType = 'Non-profit';
      if (cookie.getItem('userType') === 'lawyer') userType = 'Lawyer';
      if (cookie.getItem('userType') === 'coordinator') userType = 'Coordinator';
      return (
        <div>
          <a href="#" style={{ float: 'left' }}>
            <img src={User} alt="User" className="" style={{ width: 35, marginRight: '8px', marginTop: '3px' }} onClick={event => { console.log('account details'); } } />
          </a>
          <button type="submit" className="button is-link margin-right-5px login-button">Welcome {userType}</button>
        </div>
      );
    } else {
      return (
        <div>
          <button type="submit" className="button is-link margin-right-5px login-button">Login</button>
          <button type="submit" className="button is-link margin-right-5px login-button">Signup</button>
        </div>
      );
    }

    //else return <div></div>
     /*     <Link className="navbar-item" to="/" onClick={() => this.closeMenuBar()}>
      <p className="header-text">Logout</p>
    </Link>*/
  }

  render() {
    const { open, value } = this.state;
    if (cookie.getItem('userType') === 'ngo') {
      return (
        <div className="sticky-top">
          <nav className="navbar navbar-expand-lg" role="navigation" aria-label="main navigation">
            <div className="container header">
              <div className="navbar-brand">
              <Link to="/" className=" navbar-item mylogo2"><img className="mylogo" src={Logo} /></Link>
                <button
                  type="button"
                  onClick={e => this.toggleMenuBar(e)}
                  data-toggle="collapse"
                  data-target="#navbarColor01"
                  aria-controls="navbarColor01"
                  className={`navbar-burger navbar-toggler ${open ? 'is-active' : ''}`}
                  aria-label="menu"
                  aria-expanded="true"
                  style={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  <span className="navbar-toggler-icon" />
                  <span aria-hidden="false" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </button>
              </div>
              <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
                <Link className="navbar-item" to="/about-us" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">About Us</p>
                </Link>
                <Link className="navbar-item" to="/create-case" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">Create Case</p>
                </Link>
                <Link className="navbar-item" to="/case-history" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">Cases</p>
                </Link>
              </div>
              {/* <SearchBar /> */}
              <div className="header-right d-inline-flex" style={{ justifyContent: 'flex-end', float: 'right', marginRight: '15px' }}>
                {/*<div className="w-auto">
                  <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input className="form-control my-0 my-md-3 mr-sm-2 w-auto" type="text" value={value} onChange={this.handleChange} placeholder="Search" />
                    <button className="btn btn-secondary my-0 my-md-3 w-auto" type="submit">Search</button>
                  </form>
                </div>*/}
                <div className="ml-4 my-0 my-md-3">
                  {this.myWhat()}
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    } else if (cookie.getItem('userType') === 'lawyer') {
      return (
        <div className="sticky-top">
          <nav className="navbar navbar-expand-lg" role="navigation" aria-label="main navigation">
            <div className="container header">
              <div className="navbar-brand">
                <Link to="/" className=" navbar-item mylogo2"><img className="mylogo" src={Logo} /></Link>
                <button
                  type="button"
                  onClick={e => this.toggleMenuBar(e)}
                  data-toggle="collapse"
                  data-target="#navbarColor01"
                  aria-controls="navbarColor01"
                  className={`navbar-burger navbar-toggler ${open ? 'is-active' : ''}`}
                  aria-label="menu"
                  aria-expanded="true"
                  style={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  <span className="navbar-toggler-icon" />
                  <span aria-hidden="false" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </button>
              </div>
              <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
                <Link className="navbar-item" to="/about-us" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">About Us</p>
                </Link>
                <Link className="navbar-item" to="/case-history" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">Cases</p>
                </Link>
              </div>
              {/* <SearchBar /> */}
              <div className="header-right d-inline-flex" style={{ justifyContent: 'flex-end', float: 'right', marginRight: '15px' }}>
                {/*<div className="w-auto">
                  <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input className="form-control my-0 my-md-3 mr-sm-2 w-auto" type="text" value={value} onChange={this.handleChange} placeholder="Search" />
                    <button className="btn btn-secondary my-0 my-md-3 w-auto" type="submit">Search</button>
                  </form>
                </div>*/}
                <div className="ml-4 my-0 my-md-3">
                  {this.myWhat()}
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    } else if (cookie.getItem('userType') === 'coordinator') {
      return (
        <div className="sticky-top">
          <nav className="navbar navbar-expand-lg" role="navigation" aria-label="main navigation">
            <div className="container header">
              <div className="navbar-brand">
              <Link to="/" className=" navbar-item mylogo2"><img className="mylogo" src={Logo} /></Link>
                <button
                  type="button"
                  onClick={e => this.toggleMenuBar(e)}
                  data-toggle="collapse"
                  data-target="#navbarColor01"
                  aria-controls="navbarColor01"
                  className={`navbar-burger navbar-toggler ${open ? 'is-active' : ''}`}
                  aria-label="menu"
                  aria-expanded="true"
                  style={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  <span className="navbar-toggler-icon" />
                  <span aria-hidden="false" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </button>
              </div>
              <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
                <Link className="navbar-item" to="/about-us" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">About Us</p>
                </Link>
                <Link className="navbar-item" to="/create-case" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">Create Case</p>
                </Link>
                <Link className="navbar-item" to="/case-history" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">Cases</p>
                </Link>
              </div>
              {/* <SearchBar /> */}
              <div className="header-right d-inline-flex" style={{ justifyContent: 'flex-end', float: 'right', marginRight: '15px' }}>
                {/*<div className="w-auto">
                  <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input className="form-control my-0 my-md-3 mr-sm-2 w-auto" type="text" value={value} onChange={this.handleChange} placeholder="Search" />
                    <button className="btn btn-secondary my-0 my-md-3 w-auto" type="submit">Search</button>
                  </form>
                </div>*/}
                <div className="ml-4 my-0 my-md-3">
                  {this.myWhat()}
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="sticky-top">
          <nav className="navbar navbar-expand-lg" role="navigation" aria-label="main navigation">
            <div className="container header">
              <div className="navbar-brand">
              <Link to="/" className=" navbar-item mylogo2"><img className="mylogo" src={Logo} /></Link>
                <button
                  type="button"
                  onClick={e => this.toggleMenuBar(e)}
                  data-toggle="collapse"
                  data-target="#navbarColor01"
                  aria-controls="navbarColor01"
                  className={`navbar-burger navbar-toggler ${open ? 'is-active' : ''}`}
                  aria-label="menu"
                  aria-expanded="true"
                  style={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  <span className="navbar-toggler-icon" />
                  <span aria-hidden="false" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </button>
              </div>
              <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
                <Link className="navbar-item" to="/" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">Non-profits</p>
                </Link>
                <Link className="navbar-item" to="/about-us" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">Lawyers</p>
                </Link>
                <Link className="navbar-item" to="/about-us" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">Law Firms</p>
                </Link>
                <Link className="navbar-item" to="/about-us" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">Resources</p>
                </Link>
                <Link className="navbar-item" to="/about-us" onClick={() => this.closeMenuBar()}>
                  <p className="header-text">Success Stories</p>
                </Link>
              </div>
              {/* <SearchBar /> */}
              <div className="header-right d-inline-flex" style={{ justifyContent: 'flex-end', float: 'right', marginRight: '15px' }}>
                {/*<div className="w-auto">
                  <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input className="form-control my-0 my-md-3 mr-sm-2 w-auto" type="text" value={value} onChange={this.handleChange} placeholder="Search" />
                    <button className="btn btn-secondary my-0 my-md-3 w-auto" type="submit">Search</button>
                  </form>
                </div>*/}
                <div className="ml-4 my-0 my-md-3">
                  {this.myWhat()}
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    }

  }
}
