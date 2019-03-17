import React from 'react';

export default class NgoCaseMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableSelected: true,
      pendingSelected: false,
      matchedSelected: false,
    };
  }

  availableHandleClick = () => {
    this.setState({
      availableSelected: true,
      pendingSelected: false,
      matchedSelected: false,
    });
  }

  pendingHandleClick = () => {
    this.setState({
      availableSelected: false,
      pendingSelected: true,
      matchedSelected: false,
    });
  }

  matchedHandleClick = () => {
    this.setState({
      availableSelected: false,
      pendingSelected: false,
      matchedSelected: true,
    });
  }

  render() {
    return(
      <div className='mb-3 pageHeading'>
        <div className="d-inline-block pageHeadingDiv">
          <h4 className={`float-left pageHeadingText ${this.state.availableSelected ? 'pageHeadingSelectedTab' : ''}`} onClick={this.availableHandleClick}>Available Cases</h4>
          <h4 className={`float-left pageHeadingText ${this.state.pendingSelected ? 'pageHeadingSelectedTab' : ''}`} onClick={this.pendingHandleClick}>Pending Cases</h4>
          <h4 className={`float-left pageHeadingText ${this.state.matchedSelected ? 'pageHeadingSelectedTab' : ''}`} onClick={this.matchedHandleClick}>Matched Cases</h4>
        </div>
      </div>
    );
  }
}
