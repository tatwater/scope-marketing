import React from 'react';


import doctor from '../../images/doctor.svg';
import handshake from '../../images/handshake.svg';
import piggybank from '../../images/piggybank.svg';
import * as Custom from './speed_styles';


const Speed = () => (
  <Custom.Container>
    <Custom.Header>
      <h2>An End to <span>Information Chaos</span></h2>
      <p>Resolving healthcare's #1 inefficiency</p>
    </Custom.Header>
    <Custom.Columns>
      <Custom.Column>
        <Custom.IconWrapper>
          <img
            alt='Clinician Well-being'
            src={ doctor }
          />
        </Custom.IconWrapper>
        <h4>Clinician Well-being</h4>
        <p>By accelerating busywork and eliminating mundane tasks, Scope frees clinicians' energy for compassion and enhances face-to-face time with patients<sup><a href='https://med.stanford.edu/content/dam/sm/ehr/documents/EHR-Poll-Presentation.pdf' target='_new'>1</a></sup></p>
        {/* <p>We prevent clinician burnout and compassion fatigue by accelerating the busywork and enhancing face-to-face time with patients</p> */}
      </Custom.Column>
      <Custom.Column>
        <Custom.IconWrapper>
          <img
            alt='Trust'
            src={ handshake }
          />
        </Custom.IconWrapper>
        <h4>Trust</h4>
        {/* <p>We reduce transaction costs and overhead incurred by all parties by streamlining the validation and transmission of information</p> */}
        <p>By streamlining the validation and transmission of information, Scope reduces transaction costs and error rates incurred by all parties<sup><a href='https://www.linkedin.com/pulse/decay-healthcare-system-trust-david-loney/' target='_new'>2</a></sup></p>
      </Custom.Column>
      <Custom.Column>
        <Custom.IconWrapper>
          <img
            alt='Information Chaos'
            src={ piggybank }
          />
        </Custom.IconWrapper>
        <h4>Financial Security</h4>
        {/* <p>Of the 543,000 families who went bankrupt because of medical bills, 71% had health insurance. Yet hospitals struggle to pay their own bills</p> */}
        {/* <p>It's time to end patient bankrupcy. Bringing an end to the days of both patient and clinic bankrupcy by </p> */}
        <p>Physicians are expensive back-office workers; high overhead costs put everyone at risk. Scope ensures their time is spent as wisely as possible</p>
        {/* <p>Not only does Scope reduce documentation and transaction costs, but our documentation learns what works to help your institution get paid</p> */}
      </Custom.Column>
    </Custom.Columns>
    <Custom.CTA>
      {/* <p>Nice to meet you</p> */}
      <h2>We are an early-stage startup developing new information technology for the constantly evolving healthcare ecosystem</h2>
    </Custom.CTA>
  </Custom.Container>
);


export default Speed;
