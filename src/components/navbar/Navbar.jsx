import React from 'react';

import logo from '../../images/logo.svg';
import logoForPreview from '../../images/logo.png';
import * as Custom from './navbar_styles';


const Navbar = () => (
  <Custom.Container>
    <Custom.Content>
      <img
        alt='Logo'
        src={ logo }
      />
      <Custom.HiddenLogo>
        <img
          alt='Logo'
          src={ logoForPreview }
        />
      </Custom.HiddenLogo>
      {/* <Custom.CTA>
        Launching Soon
        <Custom.CTAButton
          to='/'
        >
          Get Notified
        </Custom.CTAButton>
      </Custom.CTA> */}
    </Custom.Content>
  </Custom.Container>
);


export default Navbar;
