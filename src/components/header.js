import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
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
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand bordered">
              <Link to="/" className=" navbar-item"><strong>AOC</strong></Link>
              <button
                type="button"
                onClick={e => this.toggleMenuBar(e)}
                className={`navbar-burger ${open ? 'is-active' : ''}`}
                aria-label="menu"
                aria-expanded="false"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                }}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
            <div className={`navbar-menu ${open ? 'is-active' : ''} bordered`}>
              <Link className="navbar-item" to="/home" onClick={() => this.closeMenuBar()}>
                Home
              </Link>
              <Link className="navbar-item" to="/sample-page-1" onClick={() => this.closeMenuBar()}>
                About Us
              </Link>
              <Link className="navbar-item" to="/create-case" onClick={() => this.closeMenuBar()}>
                Create Case
              </Link>              
              <Link className="navbar-item" to="/global-local-css" onClick={() => this.closeMenuBar()}>
                Case History
              </Link>
              <Link className="navbar-item" to="/typescript-counter" onClick={() => this.closeMenuBar()}>
                Help
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
