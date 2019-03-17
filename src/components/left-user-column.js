import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';
import cookie from '../libs/cookie';

const countries = require('../resources/json/countries').default.countries;
const languages = require('../resources/json/languages').default.languages;
const optionsPracticeArea = require('../resources/json/optionsPracticeArea').default.optionsPracticeArea;
const optionsLegalSkill = require('../resources/json/optionsLegalSkill').default.optionsLegalSkill;
const prioritySelect = require('../resources/json/prioritySelect').default.prioritySelect;

let countriesFixed = [];
for (let i = 0; i < countries.length; i++) {
    countriesFixed.push({value: countries[i].name, label: countries[i].name});
}

let languagesFixed = [];
for (let i = 0; i < languages.length; i++) {
  languagesFixed.push({value: languages[i].name, label: languages[i].name});
}

export default class LeftUserColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      practiceAreaOption: null,
      legalSkillOption: null,
      jurisdictionOption: null,
      priorityOption: null,
      languageOption: null,
    }
  }

  handlePracticeAreaChange = (practiceAreaOption) => {
    this.setState({practiceAreaOption});
    this.props.practiceAreaChange(practiceAreaOption);
  }

  PracticeAreaSelect = () => {
    const { practiceAreaOption } = this.state;
    return (
      <Select
        value={practiceAreaOption}
        onChange={this.handlePracticeAreaChange}
        options={optionsPracticeArea}
        isMulti={true}
      />
    );
  }

  handleLegalSkillChange = (legalSkillOption) => {
    this.setState({legalSkillOption});
    this.props.legalSkillChange(legalSkillOption);
  }

  LegalSkillSelect = () => {
    const { legalSkillOption } = this.state;
    return (
      <Select
        value={legalSkillOption}
        onChange={this.handleLegalSkillChange}
        options={optionsLegalSkill}
        isMulti={true}
      />
    );
  }

  handleJurisdictionChange = (jurisdictionOption) => {
    this.setState({jurisdictionOption});
    this.props.jurisdictionChange(jurisdictionOption);
  }

  JurisdictionSelect = () => {
    const { jurisdictionOption } = this.state;
    return (
      <Select
        value={jurisdictionOption}
        onChange={this.handleJurisdictionChange}
        options={countriesFixed}
        isMulti={true}
      />
    );
  }

  handleLanguageChange = (languageOption) => {
    this.setState({languageOption});
    this.props.languageChange(languageOption);
  }

  LanguageSelect = () => {
    const { languageOption } = this.state;
    return (
      <Select
        value={languageOption}
        onChange={this.handleLanguageChange}
        options={languagesFixed}
        isMulti={true}
      />
    );
  }

  handlePriorityChange = (priorityOption) => {
    this.setState({priorityOption});
    this.props.priorityChange(priorityOption);
  }

  PrioritySelect = () => {
    const { priorityOption } = this.state;
    return (
      <Select
        value={priorityOption}
        onChange={this.handlePriorityChange}
        options={prioritySelect}
        isMulti={true}
      />
    );
  }

  render() {
    if (cookie.getItem('userType') === 'ngo') {
      return (
        <div>
        </div>
      );
    }
    if (cookie.getItem('userType') === 'lawyer') {
      return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <h3 className="subtitle">Search</h3>
            </div>
          </div>
          <div className="row search-left-user-column">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="search-cases">Search</label>
                  <input className="searchBoxCaseList" type="search" placeholder="Search Cases" onChange={this.props.searchChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="practice-area">Practice Area</label>
                  {this.PracticeAreaSelect()}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="practice-area">Jurisdiction</label>
                  {this.JurisdictionSelect()}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="practice-area">Priority</label>
                  {this.PrioritySelect()}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="practice-area">Legal Skill</label>
                  {this.LegalSkillSelect()}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="practice-area">Language</label>
                  {this.LanguageSelect()}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (cookie.getItem('userType') === 'coordinator') {
      return (
        <div>
        </div>
      );
    }

  }
}
