import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';
import Immegration from '../resources/img/immegration.png';

export default class NgoCase extends React.Component {
  
    render() {
      return (
        <div className="row">
        <div className="col-md-12">
          <div className="border ngo-case">
            <div className="ngo-case-top-header">
            <a href="#" className="case-title">{this.props.title}</a>
            <a href="#" className="float-right">
            <img alt="test" src={Immegration} /></a>
            </div>
            <div class="case-description">
              <p>{this.props.details}</p>
            </div>
  
            <div className="buttons">
            <button className="" type="submit">Details</button>
            <button className="" type="submit">Remove</button>
            </div>     
  
            <div>
                <div className="tagcloud03">
                  <ul>
                    <li><a href="#">Immigration<span>20</span></a></li>
                    <li><a href="#">Lorem ipsum dolor sit amet<span>20</span></a></li>
                  </ul>
                </div>            
            </div>
       
          </div>
          </div>
        </div>
      )
    }
  }