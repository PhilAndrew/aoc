import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';

class ApplyCaseRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applied: false
    }
  }

  handleChange = () => {
    this.setState({
      applied: true
    })
  }

  render() {
    if (!this.state.applied) {
      return(
        <button className="" type="submit" onClick={this.handleChange}>Apply Case</button>
      )
    }
    return(<button className="" type="submit" disabled>Pending</button>)    
  }
}

export default class LawyerCase extends React.PureComponent {
  render() {
    const { title, details, image, tags } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="border ngo-case">
            <div className="ngo-case-top-header">
              <a href="#" className="case-title">
                {title}
              </a>
              <a href="#" className="float-right">
                <img alt="" src={image} />
              </a>
            </div>
            <div class="case-description">
              <p>{details}</p>
            </div>

            <div className="buttons">
              <ApplyCaseRender />
            </div>
            <div>
              <div className="tags-grid">
                {tags.map((tag) =>
                  <a href="#" className="tag-button">
                    {tag}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}