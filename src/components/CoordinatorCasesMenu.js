import React from 'react';

export default class NgoCasesMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingSelected: true,
      approvedSelected: false,
    };
  }

  pendingHandleClick = () => {
    this.setState({
      pendingSelected: true,
      approvedSelected: false,
    });
  }

  approvedHandleClick = () => {
    this.setState({
      pendingSelected: false,
      approvedSelected: true,
    });
  }

  render() {
    return(
      <div className='mb-3 pageHeading'>
        <div className="d-inline-block pageHeadingDiv">
          <h4 className={`float-left pageHeadingText ${this.state.pendingSelected ? 'pageHeadingSelectedTab' : ''}`} onClick={this.pendingHandleClick}>Pending Cases</h4>
          <h4 className={`float-left pageHeadingText ${this.state.approvedSelected ? 'pageHeadingSelectedTab' : ''}`} onClick={this.approvedHandleClick}>Approved Cases</h4>
        </div>
      </div>
    );
  }
}
