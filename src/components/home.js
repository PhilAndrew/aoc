import React from 'react';
import PropTypes from 'prop-types';
import GuestLayout from './guest-layout';

const Column = (props) => {
  const { title, description, link } = props;
  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {title}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {description}
            {' '}
            {!!link.length && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Read more
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
Column.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default () => (
  <GuestLayout>
    <section className="hero is-medium is-info is-bold">
      <div className="">
        <div className="container">
        <section className="row">
          <div className="col-md-12">
          <br /><br />
          </div>
          </section>
          <section className="row">
          <div className="col-md-4 section_title animated wow fadeInUp">
                  <h2>User login.</h2>
                </div>          
          <div className="col-md-6">
          <div className="field">
                  <label className="label" htmlFor="username">
                    username
                    <div className="control">
                      <input
                        defaultValue="User name"
                        id="username"
                        name="username"
                        className={`input`}
                        type="text"
                        placeholder="Username input"
                      />
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor="password">
                    password
                    <div className="control">
                      <input
                        defaultValue="Password"
                        id="password"
                        name="password"
                        className={`input`}
                        type="password"
                        placeholder="Password input"
                      />
                    </div>
                  </label>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button type="submit" className="button is-link">Login</button>
                  </div>
                </div>
          </div>
          </section>
          <section className="row">
          <div className="col-md-12">
          <br /><br />
          </div>
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
        </div>
      </div>
    </section>
  </GuestLayout>
);
