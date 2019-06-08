import React from 'react';

import * as Custom from './footer_styles';


const Footer = () => (
  <Custom.Container>
    <p>Hanover and Portsmouth, New Hampshire</p>
    <Custom.Copyright>© Copyright { new Date().getFullYear() }, ClinicIQ. All rights reserved.</Custom.Copyright>
  </Custom.Container>
);


export default Footer;
