import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import CatDog from '../resources/img/logo.png';
// import SearchBar from './search-bar';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      search: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.search);
    event.preventDefault();
  }

  toggleMenuBar(e) {
    const { open } = this.state;
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({
      open: !open,
    });
  }

  closeMenuBar() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg" role="navigation" aria-label="main navigation">
          <div className="container header">
            <div className="navbar-brand">
              <Link to="/" className=" navbar-item"><p className="header-text"><strong>AOC</strong></p></Link>
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
                <p className="header-text">Home</p>
              </Link>
              <Link className="navbar-item" to="/sample-page-1" onClick={() => this.closeMenuBar()}>
                <p className="header-text">About Us</p>
              </Link>
              <Link className="navbar-item" to="/create-case" onClick={() => this.closeMenuBar()}>
                <p className="header-text">Create Case</p>
              </Link>              
              <Link className="navbar-item" to="/case-history" onClick={() => this.closeMenuBar()}>
                <p className="header-text">Case History</p>
              </Link>
              <Link className="navbar-item" to="/typescript-counter" onClick={() => this.closeMenuBar()}>
                <p className="header-text">Help</p>
              </Link>
            </div>
            {/* <SearchBar /> */}
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
              <input className="form-control mr-sm-2" type="text" value={ this.state.value} onChange={this.handleChange} placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
