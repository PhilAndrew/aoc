import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';

const countries = require('../resources/json/countries').default.countries;
const languages = require('../resources/json/languages').default.languages;
const optionsPracticeArea = require('../resources/json/optionsPracticeArea').default.optionsPracticeArea;
const optionsLegalSkill = require('../resources/json/optionsLegalSkill').default.optionsLegalSkill;
const prioritySelect = require('../resources/json/prioritySelect').default.prioritySelect;

export default class NgoCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.singleCase.title,
      image: props.singleCase.image,
      details: props.singleCase.details,
      priority: props.singleCase.priority,
      practiceArea: props.singleCase.practiceArea,
      legalSkill: props.singleCase.legalSkill,
      jurisdictions: props.singleCase.jurisdictions,
      languages: props.singleCase.languages,
      applied: false
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      title: newProps.singleCase.title,
      image: newProps.singleCase.image,
      details: newProps.singleCase.details,
      priority: newProps.singleCase.priority,
      practiceArea: newProps.singleCase.practiceArea,
      legalSkill: newProps.singleCase.legalSkill,
      jurisdictions: newProps.singleCase.jurisdictions,
      languages: newProps.singleCase.languages,
    });
  }

  handleChange = () => {
    this.setState({
      applied: true,
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

  renderLegalSkill = () => {
    const { legalSkill } = this.state;
    if (legalSkill) {
      return (
        legalSkill.map((tag, key) => {
          let index = 0;
          for (let i = 0; i < optionsLegalSkill.length;i++) {
            if (optionsLegalSkill[i].value === tag) {
              index = i;
              break;
            }
          }
          return (
            <p key={key} className="tag-button">
              {optionsLegalSkill[index].label}
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


  render() {
    const { title, details, image, applied } = this.state;
    let button;
    if (!applied) {
      button = <button className="buttonCaseList" type="submit" onClick={this.handleChange}>Apply</button>;
    } else {
      button = <button className="buttonCaseList grayButtonCaseList" type="submit" disabled>Pending</button>;
    }

    return (
      <div className="row">
        <div className="col-md-12">
          <div className={`border ngo-case ${applied ? 'pendingCase' : null}`}>
            <div className="ngo-case-top-header">
              <a href="#" className="case-title">
                {title}
              </a>
              <a href="#" className="float-right">
                <img alt="" src={image} className="rounded img-fluid mt-lg-4" />
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
                {this.renderPracticeArea()}
                {this.renderLegalSkill()}
                {this.renderJurisdictions()}
                {this.renderLanguages()}
                {this.renderPriority()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}