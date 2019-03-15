import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';


const optionsPracticeArea = [
    { value: 'immigration', label: 'Immigration' },
    { value: 'incorporation', label: 'Incorporation' },
    { value: 'taxexemption', label: 'Tax exemption' },
    { value: 'courtproceeding', label: 'Court proceeding' },
    { value: 'documentreview', label: 'Document review' },
    { value: 'research', label: 'Research' },
  ];
  
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

  

export default class LeftUserColumn extends React.Component {
  
    render() {
        return <div>
        <div className="row">
        <div className="col-md-12">
        <h3 class="subtitle">Search</h3>
        </div>
        </div>

        <div className="row search-left-user-column">
        <div className="col-md-12">

        <div className="row">
        <div className="col-md-12">
        <label htmlFor="practice-area">Practice Area</label>
        <PracticeAreaSelect />
        </div></div>
        <div className="row">
        <div className="col-md-12">
        <label htmlFor="practice-area">Practice Area</label>
        <PracticeAreaSelect />
        </div></div>
        </div></div>
        </div>
    }
  }
