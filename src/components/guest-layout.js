import React from 'react';
import Header from './header';
import Footer from './footer';

export default function (props) {
  // eslint-disable-next-line
  const { children } = props;
  return (
    <div className="guest-layout">
      <Header />
      {children}
      <br />
      <Footer />
    </div>
  );
}
