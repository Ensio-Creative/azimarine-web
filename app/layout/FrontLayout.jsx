import React from 'react';
import HeaderNav from '../components/HeaderNav';
import FooterNav from '../components/FooterNav';

const FrontLayout = ({ children }) => {
  return (
    <main>
      <HeaderNav />
      <>
        {children}
      </>
      <FooterNav />
    </main>
  );
};

export default FrontLayout;