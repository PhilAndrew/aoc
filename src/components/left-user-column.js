import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';

export default class LeftUserColumn extends React.Component {
  
    render() {
        return <div>
        <div className="row">
        <div className="col-md-12">
        <h3 class="subtitle">Search</h3>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
        <img alt="todo" src={CatDog} class="profile-photo-small" />
        Peter<br />
        Sales rep
        </div></div>
        <div className="row">
        <div className="col-md-12">
        <img alt="todo" src={CatDog} class="profile-photo-small" />
        Sarah<br />
        I am a person
        </div></div>
        <div className="row">
        <div className="col-md-12">
        <img alt="todo" src={CatDog} class="profile-photo-small" />
        Jenny<br />
        </div>
        </div>
        </div>
    }
  }
