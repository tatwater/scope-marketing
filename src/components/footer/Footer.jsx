import React from 'react';

import * as Custom from './footer_styles';


const Footer = () => (
  <Custom.Container>
    <Custom.Content>
      <p>Hanover and Portsmouth, New Hampshire</p>
      <Custom.Copyright>© Copyright { new Date().getFullYear() }, ClinicIQ. All rights reserved.</Custom.Copyright>
      <Custom.Footnotes>
        <Custom.Footnote>1.&nbsp;
          <a
            href='https://med.stanford.edu/content/dam/sm/ehr/documents/EHR-Poll-Presentation.pdf'
            target='_new'
          >
            Stanford Medicine Harris Poll, "How Doctors Feel About Electronic Health Records"
          </a>
        </Custom.Footnote>
        <Custom.Footnote>2.&nbsp;
          <a
            href='https://www.linkedin.com/pulse/decay-healthcare-system-trust-david-loney/'
            target='_new'
          >
            David Loney, "The Decay of the Healthcare System is a Decay in 'Trust'"
          </a>
        </Custom.Footnote>
      </Custom.Footnotes>
    </Custom.Content>
  </Custom.Container>
);


export default Footer;
