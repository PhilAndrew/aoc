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

export default class NgoCase extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: props.element.title,
      image: props.element.image,
      details: props.element.details,
      priority: props.element.priority,
      practiceArea: props.element.practiceArea,
      legalSkill: props.element.legalSkill,
      jurisdictions: props.element.jurisdictions,
      languages: props.element.languages
    };
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
            <a href="#" key={key} className="tag-button">
              {optionsPracticeArea[index].label}
            </a>
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
            <a href="#" key={key} className="tag-button">
              {optionsLegalSkill[index].label}
            </a>
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
            <a href="#" key={key} className="tag-button">
              {tag}
            </a>
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
            <a href="#" key={key} className="tag-button">
              {tag}
            </a>
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
      <a href="#" className="tag-button">
        {priorityTag}
      </a>
    );
  }


  render() {
    const { title, details, image } = this.state;
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
              <button className="buttonCaseList" type="submit">Details</button>
              <button className="buttonCaseList grayButtonCaseList" type="submit">Remove</button>
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