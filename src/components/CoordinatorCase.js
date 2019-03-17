import React from 'react';

const countries = require('../resources/json/countries').default.countries;
const languages = require('../resources/json/languages').default.languages;
const optionsPracticeArea = require('../resources/json/optionsPracticeArea').default.optionsPracticeArea;
const optionsLegalSkill = require('../resources/json/optionsLegalSkill').default.optionsLegalSkill;
const prioritySelect = require('../resources/json/prioritySelect').default.prioritySelect;

export default class CoordinatorCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lawyerName: props.singleCase.lawyerName,
      title: props.singleCase.title,
      image: props.singleCase.image,
      details: props.singleCase.details,
      priority: props.singleCase.priority,
      practiceArea: props.singleCase.practiceArea,
      jurisdictions: props.singleCase.jurisdictions,
      languages: props.singleCase.languages,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      lawyerName: newProps.singleCase.lawyerName,
      title: newProps.singleCase.title,
      image: newProps.singleCase.image,
      details: newProps.singleCase.details,
      priority: newProps.singleCase.priority,
      practiceArea: newProps.singleCase.practiceArea,
      jurisdictions: newProps.singleCase.jurisdictions,
      languages: newProps.singleCase.languages,
    });
  }

  renderPracticeArea = () => {
    const { practiceArea } = this.state;
    if (practiceArea) {
      return (
        practiceArea.map((tag, key) => {
          let index = 0;
          for(let i = 0; i < optionsPracticeArea.length; i++) {
            if (optionsPracticeArea[i].value === tag) {
              index = i;
              break;
            }
          }
          return (
            <p key={key} className="tag-button">
              {optionsPracticeArea[index].label}
            </p>
          );
        })
      );
    }
  }

  renderJurisdictions = () => {
    const { jurisdictions } = this.state;
    if (jurisdictions) {
      return (
        jurisdictions.map((tag, key) => {
          return (
            <p key={key} className="tag-button">
              {tag}
            </p>
          );
        })
      );
    }
  }

  renderLanguages = () => {
    const { languages } = this.state;
    if (languages) {
      return (
        languages.map((tag, key) => {
          return (
            <p key={key} className="tag-button">
              {tag}
            </p>
          );
        })
      );
    }
  }

  renderPriority = () => {
    const { priority } = this.state;
    let index = 0;
    for(let i = 0; i < prioritySelect.length; i++) {
      if(prioritySelect[i].value === priority) {
        index = i;
        break;
      }
    }
    let priorityTag = prioritySelect[index].label;
    return (
      <p className="tag-button">
        {priorityTag}
      </p>
    );
  }

  approveHandleClick = () => {
    // Something
  }

  rejectHandleClick = () => {
    // Something
  }

  render() {
    const { lawyerName, title, details, image, applied } = this.state;
    return(
      <tr>
        <td className="coordinatorTD">
          {lawyerName}
        </td>
        <td className="coordinatorTD">
          {title}
          <div className="tags-grid">
            {this.renderPracticeArea()}
            {this.renderJurisdictions()}
            {this.renderLanguages()}
            {this.renderPriority()}
          </div>
        </td>
        <td className="coordinatorTD">
          <button className="buttonCaseList" type="submit" onClick={this.approveHandleClick}>Approve</button>
          <button className="buttonCaseList grayButtonCaseList" type="submit" onClick={this.rejectHandleClick}>Reject</button>
        </td>
      </tr>
    );
  }
}
