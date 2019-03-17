import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';
import LeftUserColumn from './left-user-column';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { formatDate, parseDate } from 'react-day-picker/moment';

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

class PracticeAreaSelect extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;
    console.log(optionsPracticeArea);
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={optionsPracticeArea}
        isMulti={true}
      />
    );
  }
}

class LegalSkillSelect extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={optionsLegalSkill}
        isMulti={true}
      />
    );
  }
}

class JurisdictionSelect extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={countriesFixed}
        isMulti={true}
      />
    );
  }
}

class LanguageSelect extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={languagesFixed}
        isMulti={true}
      />
    );
  }
}

class DayInput extends React.Component {
  state = {
    selectedDay: null,
  }
  handleChange = (selectedDay) => {
    this.setState({ selectedDay });
    console.log('Day selected: ', selectedDay);
  }
  render() {
    const { selectedDay } = this.state;

    return (
      <div>
        <DayPickerInput
          onDayChange={selectedDay => this.handleChange(selectedDay)}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder='MM/DD/YYYY'
          inputProps={{ style: {  width: '100%', borderWidth: '1px', height: '2.4em', borderStyle: 'solid', borderColor: '#c9c9c9', borderRadius: '4px', padding: '0.5em', outline: 'none' } }}
        />
      </div>
    );
  }
}


export default () => (
  <GuestLayout>
    <div className="container p-b-md p-r-md p-l-md">

    <div className="row ">
        <div className="col-md-6 order-md-1 bordered">
        <h4 className="mb-3 page-heading">Create a new Case</h4>
        <form className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="" required />
          </div>
          <div className="mb-3">
            <label htmlFor="client">Client Name</label>
            <input type="text" className="form-control" id="client" placeholder="" required />
          </div>
          <div className="mb-3">
            <label htmlFor="practice-area">Practice Area</label>
            <PracticeAreaSelect />
          </div>

          <div className="mb-3">
            <label htmlFor="legal-skill">Legal skill</label>

            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="a1" name="defaultExampleRadios2" />
            <label className="custom-control-label" for="a1">Advice</label>
          </div>

          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="a2" name="defaultExampleRadios2" />
            <label className="custom-control-label" for="a2">Advocacy</label>
          </div>

          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="a3" name="defaultExampleRadios2" />
            <label className="custom-control-label" for="a3">Draft/Review Legal Documentation</label>
          </div>

          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="a4" name="defaultExampleRadios2" />
            <label className="custom-control-label" for="a4">Direct Representation</label>
          </div>

          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="a5" name="defaultExampleRadios2" />
            <label className="custom-control-label" for="a5">Research</label>
          </div>

          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="a6" name="defaultExampleRadios2" />
            <label className="custom-control-label" for="a6">Training</label>
          </div>

        </div>

          <div className="mb-3">
            <label htmlFor="jurisdiction">Jurisdiction</label>
            <JurisdictionSelect />
          </div>
          <div className="mb-3">
            <label htmlFor="priority">Relevant Language</label>
            <LanguageSelect />
          </div>
          <div className="mb-3">
          <label htmlFor="priority">Priority</label>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="one" name="defaultExampleRadios" />
            <label className="custom-control-label" for="one">Immediate</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="two" name="defaultExampleRadios" />
            <label className="custom-control-label" for="two">Flexible</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="three" name="defaultExampleRadios" />
            <label className="custom-control-label" for="three">Long term</label>
          </div>
          </div>
          <div className="mb-3">
            <label htmlFor="deadline">Expected Date of Completion</label>
            <br />
            <DayInput />
          </div>
          <div className="mb-3">
            <label htmlFor="description">Description</label>
            <textarea id="description" className="form-control" rows="3" placeholder="" required></textarea>
          </div>
          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg share-button" type="submit">Share to everyone</button>
          <button className="btn btn-primary btn-lg share-button" type="submit">Share to my Connections</button>
        </form>
        </div>
      </div>

    </div>
  </GuestLayout>
);
