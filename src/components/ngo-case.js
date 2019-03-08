import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';

export default class NgoCase extends React.Component {
  
    render() {
      return (
        <div class="row">
        <div className="col-md-12">
          <div className="border ngo-case">
            <div>
            <a href="#">{this.props.title}</a>
            <a href="#" className="float-right">Icons/Pictures</a>
            </div>
            <div class="case-description">
              <p>{this.props.details}</p>
            </div>
  
            <div className="buttons">
            <button className="" type="submit">Details</button>
            <button className="" type="submit">Remove</button>
            </div>     
  
            <div>
                <div class="tagcloud03">
                  <ul>
                    <li><a href="#">Immigration<span>20</span></a></li>
                    <li><a href="#">tag<span>20</span></a></li>
                    <li><a href="#">tag<span>20</span></a></li>
                    <li><a href="#">tag<span>20</span></a></li>
                    <li><a href="#">tag<span>20</span></a></li>
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