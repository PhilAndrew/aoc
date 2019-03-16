import React from 'react';
import PropTypes from 'prop-types';
import GuestLayout from './guest-layout';
import AocLogin from './aoc-login';
import CardBoxes from './card-box';
import LandingBanner from './landing-banner';

export default () => (
  <GuestLayout>
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
          <section className="row">
            <div className="col-md-12">
              <br />
              <br />
            </div>
          </section>
          <section className="row">
            <LandingBanner />
          </section>
          <section className="row">
            <div className="col-md-4 section_title animated wow fadeInUp">
              <h2>What We Do.</h2>
            </div>
            <div className="animated wow fadeInRight col-md-2" data-wow-delay=".2s">
              <h3>For Client.</h3>
              <p>Post cases and match effectively with lawyers.</p>
              <a href="clienthome.html">details<span className="arrow">&rarr;</span></a>
            </div>
            <div className="animated wow fadeInRight col-md-2" data-wow-delay=".3s">
              <h3>For Lawyers.</h3>
              <p>Find cases that match your interests and availability in real-time.</p>
              <a href="#">details<span className="arrow">&rarr;</span></a>
            </div>
            <div className="animated wow fadeInRight col-md-2" data-wow-delay=".4s">
              <h3>For Coordinator.</h3>
              <p>Check cases and exercise approval right with administrator level.</p>
              <a href="#">details<span className="arrow">&rarr;</span></a>
            </div>
          </section>
          <CardBoxes />
        </div>
      </div>
    </section>
  </GuestLayout>
);
