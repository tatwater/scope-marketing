import React from 'react';

import logoForPreview from '../../images/logo.png';
import browser from '../../images/browser.svg';
import * as Custom from './hero_styles';


const Hero = () => (
  <Custom.Container>
    <Custom.HiddenLogo>
      <img
        alt='Logo'
        src={ logoForPreview }
      />
    </Custom.HiddenLogo>
    <Custom.Browser src={ browser } alt='browser' />
    <h1>Health information technology as you imagine it</h1>
    <p>Innovated by a community of clinicians, designers, and engineers</p>
  </Custom.Container>
);


export default Hero;
