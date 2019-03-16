import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';

export default class LawyerCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applied: false
    }
  }

  handleChange = () => {
    this.setState({
      applied: true
    });
  }

  renderTags = () => {
    const { tags } = this.state;
    if (tags) {
      return (
        tags.map((tag, i) => {
          return (
            <a href="#" key={i} className="tag-button">
              {tag}
            </a>
          );
        })
      );
    }
  }

  render() {
    const { title, details, image, tags } = this.props;
    const { applied } = this.state;
    let button;
    if (!applied) {
      button = <button className="" type="submit" onClick={this.handleChange}>Apply Case</button>;
    } else {
      button = <button className="" type="submit" disabled>Pending</button>;
    }
    
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
            <div className="case-description">
              <p>{details}</p>
            </div>

            <div className="buttons">
              {button}
            </div>
            <div>
              <div className="tags-grid">
                {this.renderTags()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}