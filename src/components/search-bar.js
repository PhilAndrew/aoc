import React from 'react';

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      	<form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
          <input className="form-control mr-sm-2" type="text" value={ this.state.value} onChange={this.handleChange} placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    );
  }
}
