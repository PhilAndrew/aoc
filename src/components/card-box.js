import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from './search-bar';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.onCardHover = this.onCardHover.bind(this);
  }

  onCardHover = (event) => {
    
  }

  render() {
    return (
      <div className="row" style={{ marginTop: '1em', marginBottom: '1em' }}>
        <Link to="/" className="col-3">
          <div className="card border-primary" onFocus={this.onCardHover} style={{ maxWidth: '20em' }}>
            <div className="card-body">
              <h2 className="card-title" style={{ fontFamily: "Lucida Console", fontSize: '1.8em', marginBottom: '0em', color: '#f39c12' }}>NONPROFITS</h2>
              <p className="card-title" style={{ fontFamily: "Lucida Console", fontSize: '0.8em', marginBottom: '1em' }}>Connect with skilled volunteers</p>
              <p className="card-text" style={{ marginTop: '4em', fontSize: '0.8em', color: '#f39c12' }}>Learn more</p>
            </div>
          </div>
        </Link>
        <div className="col-1"></div>
        <Link to="/" className="col-3">
          <div className="card border-primary" onFocus={this.onCardHover} style={{ maxWidth: '20em' }}>
            <div className="card-body">
              <h2 className="card-title" style={{ fontFamily: "Lucida Console", fontSize: '1.8em', marginBottom: '0em', color: '#3498db' }}>NONPROFITS</h2>
              <p className="card-title" style={{ fontFamily: "Lucida Console", fontSize: '0.8em', marginBottom: '1em' }}>Connect with skilled volunteers</p>
              <p className="card-text" style={{ marginTop: '4em', fontSize: '0.8em', color: '#3498db' }}>Learn more</p>
            </div>
          </div>
        </Link>
        <div className="col-1"></div>
        <Link to="/" className="col-3">
          <div className="card border-primary" onFocus={this.onCardHover} style={{ maxWidth: '20em' }}>
            <div className="card-body">
              <h2 className="card-title" style={{ fontFamily: "Lucida Console", fontSize: '1.8em', marginBottom: '0em', color: '#2ecc71' }}>NONPROFITS</h2>
              <p className="card-title" style={{ fontFamily: "Lucida Console", fontSize: '0.8em', marginBottom: '1em' }}>Connect with skilled volunteers</p>
              <p className="card-text" style={{ marginTop: '4em', fontSize: '0.8em', color: '#2ecc71' }}>Learn more</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
