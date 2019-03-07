import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';

class NgoCase extends React.Component {
  
  render() {
    return (
      <div class="row">
      <div className="col-md-12">
        <div className="border ngo-case">
          <div>
          <a href="#">Help: Immigrating to Hong Kong</a>
          <a href="#" className="float-right">Icons/Pictures</a>
          </div>
          <div>
            <p>Case description</p>
          </div>
          <div>
          <button className="" type="submit">Details</button>
          <button className="" type="submit">Approve</button>
          </div>          
        </div>
        </div>
      </div>
    )
  }
}

export default () => (
  <GuestLayout>
    <div className="container p-b-md p-r-md p-l-md">

    <div className="row ">
        <div className="col-md-2 order-md-1 bordered">
            <div className="row centered-content">
            <h3 class="subtitle">Welcome NGO User</h3>
            <img alt="todo" src={CatDog} class="profile-photo" />
            <br />
            <h3 class="subtitle">Contact List</h3>
            </div>
        </div>
        <div className="col-md-10 order-md-1 bordered">
        <h4 className="mb-3 page-heading">Case history</h4>

        <NgoCase />
        <NgoCase />        
        <NgoCase />        
        <NgoCase />        
        <NgoCase />        
        <NgoCase />        
        <NgoCase />        
        <NgoCase />        
        <NgoCase />        
        
        </div>
      </div>

 

    </div>
  </GuestLayout>
);
