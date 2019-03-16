import React from 'react';
import PropTypes from 'prop-types';
import GuestLayout from './guest-layout';
import AocLogin from './aoc-login';
import CardBoxes from './card-box';
import LandingBanner from './landing-banner';

export default () => (
  <GuestLayout>
    <section className="hero">
      <LandingBanner />
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
