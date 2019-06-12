import React from 'react';

import logo from '../../images/logo.svg';
import * as Custom from './navbar_styles';


const Navbar = () => (
  <Custom.Container>
    <Custom.Content>
      <img 
        alt='Logo'
        src={ logo }
      />
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
