import React from 'react';
import PropTypes from 'prop-types';
import GuestLayout from './guest-layout';
import AocLogin from './aoc-login';
import CardBoxes from './card-box';
import LandingBanner from './landing-banner';

export default () => (
  <GuestLayout>
        <div className="hideme-when-narrow" style={{ opacity: '0.5', height: '410px', position: 'absolute', width: '100%', margin: '0px' }}>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%;' }} width="100%">
        <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#99D5EA' }}></path>
      </svg>
    </div>
    <section className="hero">

      <div className="">
        <div className="container">
          <section className="row">
            <div className="col-md-12">
              <br />
              <br />
            </div>
          </section>
          <AocLogin />
        </div>
      </div>
      </section>
  </GuestLayout>
);
