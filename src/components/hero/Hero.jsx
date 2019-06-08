import React from 'react';

import browser from '../../images/browser.svg';
import * as Custom from './hero_styles';


const Hero = () => (
  <Custom.Container>
    <Custom.Browser src={ browser } alt='browser' />
    <h1>The HIT you imagined</h1>
    <p>Innovated by a community of clinicians, designers, and engineers</p>
  </Custom.Container>
);


export default Hero;
