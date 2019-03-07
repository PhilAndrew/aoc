import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';
import NgoCase from './ngo-case';
import LeftUserColumn from './left-user-column';

export default () => (
  <GuestLayout>
    <div className="container p-b-md p-r-md p-l-md">

    <div className="row ">
        <div className="col-md-2 order-md-1 bordered">

        <LeftUserColumn />

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
