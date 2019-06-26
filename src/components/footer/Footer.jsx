import React from 'react';

import * as Custom from './footer_styles';


const Footer = () => (
  <Custom.Container>
    <p>Hanover and Portsmouth, New Hampshire</p>
    <Custom.Copyright>© Copyright { new Date().getFullYear() }, ClinicIQ. All rights reserved.</Custom.Copyright>
    <Custom.Footnotes>
      <Custom.Footnote>1.&nbsp;
        <a
          href='https://med.stanford.edu/content/dam/sm/ehr/documents/EHR-Poll-Presentation.pdf'
          target='_new'
        >
          https://med.stanford.edu/content/dam/sm/ehr/documents/EHR-Poll-Presentation.pdf
        </a>
      </Custom.Footnote>
      <Custom.Footnote>2.&nbsp;
        <a
          href='https://www.linkedin.com/pulse/decay-healthcare-system-trust-david-loney/'
          target='_new'
        >
          https://www.linkedin.com/pulse/decay-healthcare-system-trust-david-loney/
        </a>
      </Custom.Footnote>
    </Custom.Footnotes>
  </Custom.Container>
);


export default Footer;
