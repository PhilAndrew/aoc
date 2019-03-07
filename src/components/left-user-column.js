import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';

export default class LeftUserColumn extends React.Component {
  
    render() {
        return <div>
        <div className="row centered-content">
        <h3 class="subtitle">Welcome NGO User</h3>
        <img alt="todo" src={CatDog} class="profile-photo" />
        <br />
        <h3 class="subtitle">Contact List</h3>
        </div>
        <div className="row">
        <img alt="todo" src={CatDog} class="profile-photo-small" />
        Peter<br />
        Sales rep
        </div>
        <div className="row">
        <img alt="todo" src={CatDog} class="profile-photo-small" />
        Sarah<br />
        I am a person
        </div>
        <div className="row">
        <img alt="todo" src={CatDog} class="profile-photo-small" />
        Jenny<br />
        I am Jenny
        </div>
        </div>
    }
  }
