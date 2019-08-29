import React from 'react';
import { withMixpanel } from 'gatsby-plugin-mixpanel';

import maynard from '../../images/maynard.png';
import tim from '../../images/tim.png';
import teagan from '../../images/teagan.png';
import kaya from '../../images/kaya.png';
import greg from '../../images/greg.png';
import travis from '../../images/travis.png';
import david from '../../images/david.png';
import rick from '../../images/rick.png';
import roxanne from '../../images/roxanne.png';
// import natalia from '../../images/natalia.png';
import gunnar from '../../images/gunnar.png';
// import eileen from '../../images/eileen.png';
import suki from '../../images/suki.png';
import roshini from '../../images/roshini.png';
import linkedin from '../../images/linkedin.svg';
import * as Custom from './team_styles';


const Team = ({ mixpanel }) => (
  <Custom.Container>
    <Custom.Header>
      <h2>Our Team</h2>
    </Custom.Header>
    <Custom.People>
      <Custom.Person>
        <Custom.Photo
          alt='Maynard Carkhuff'
          src={ maynard }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>Advisory Board Member</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Maynard Carkhuff</Custom.Name>
          <Custom.Location>Orange County, California</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>Chairman of Freedom Innovations. Formerly CEO and CIO, Freedom Innovations; CEO, Ossur Prosthetics; President & CEO, Flex-Foot.</Custom.Bio>
      </Custom.Person>
      <Custom.Person>
        <Custom.Photo
          alt='Tim Jenkinson, PhD'
          src={ tim }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>Advisory Board Member</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Tim Jenkinson, PhD</Custom.Name>
          <Custom.Location>Oxford, England</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>Professor of Finance at Oxford University Saïd Business School. Director, Oxford University Private Equity Institute. Fellow, Keble College. Chairman, Oxera. Academic advisor, KPMG’s Global Valuation Institute.</Custom.Bio>
      </Custom.Person>
      <Custom.Person>
        <Custom.Photo
          alt='Teagan Atwater'
          src={ teagan }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>Chief Design Officer, CTO, & <span>Co-Founder</span></Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>
            Teagan Atwater
            <Custom.LinkedIn
              target='_new'
              onClick={() => { mixpanel.track('LinkedIn — Teagan'); }}
              href='https://www.linkedin.com/in/teaganatwater/'
            >
              <img
                alt='LinkedIn'
                src={ linkedin }
              />
            </Custom.LinkedIn>
          </Custom.Name>
          <Custom.Location>Hanover, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>Formerly CTO & Co-founder of Fiber, and President & Founder of Shadow Art Studios. BA in Computer Science and Architectural Studies, Connecticut College. Selected Scholar, Ammerman Center for Arts and Technology.</Custom.Bio>
      </Custom.Person>
      <Custom.Person>
        <Custom.Photo
          alt='David Loney, CP, MBA'
          src={ david }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>CEO, & <span>Co-Founder</span></Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>
            David Loney, CP, MBA
            <Custom.LinkedIn
              onClick={() => { mixpanel.track('LinkedIn — David'); }}
              target='_new'
              href='https://www.linkedin.com/in/david-loney-50b86744/'
            >
              <img
                alt='LinkedIn'
                src={ linkedin }
              />
            </Custom.LinkedIn>
          </Custom.Name>
          <Custom.Location>Hanover, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>Formerly President and Founder of WillowBrook Prosthetics. Executive MBA, Oxford University. Clinical prosthetics training, UCLA.</Custom.Bio>
      </Custom.Person>
      <Custom.Person>
        <Custom.Photo
          alt='Richard Powell, MD'
          src={ rick }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>Chief Medical Officer</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Richard Powell, MD</Custom.Name>
          <Custom.Location>Hanover, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>Section Chief of Vascular Surgery at Dartmouth Hitchcock Medical Center. Professor of Surgery and Professor of Radiology, Geisel School of Medicine, Dartmouth College.</Custom.Bio>
      </Custom.Person>
      <Custom.Person>
        <Custom.Photo
          alt='Roxanne Low'
          src={ roxanne }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>Head of Interaction Design</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Roxanne Low</Custom.Name>
          <Custom.Location>Hanover, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>BA in Art and Computer Science, Phi Beta Kappa, Connecticut College. Selected Scholar, Ammerman Center for Arts and Technology.</Custom.Bio>
      </Custom.Person>
      <Custom.Person>
        <Custom.Photo
          alt='Greg Hagley, DPT'
          src={ greg }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>Head of UX & QA</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Greg Hagley, DPT</Custom.Name>
          <Custom.Location>Hanover, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>Fellow in Health Systems Research at the Veterans Administration. Physical Therapist, Dartmouth Hitchcock Medical Center. MASc in Patient Safety, Johns Hopkins Bloomberg School of Public Health. Doctor of Physical Therapy, University of New England.</Custom.Bio>
      </Custom.Person>
      <Custom.Person>
        <Custom.Photo
          alt='Travis Peters, PhD'
          src={ travis }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>Head of Cybersecurity</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Travis Peters, PhD</Custom.Name>
          <Custom.Location>Hanover, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>Assistant Professor of Computer Science at Montana State University. PhD in Computer Science, Dartmouth College.</Custom.Bio>
      </Custom.Person>
      <Custom.Person>
        <Custom.Photo
          alt='Kaya Fayen'
          src={ kaya }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>Head of People Operations</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Kaya Meenagh</Custom.Name>
          <Custom.Location>Hanover, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>BA in Botany, University of Hawaii at Manoa.</Custom.Bio>
      </Custom.Person>
      {/* <Custom.Person>
        <Custom.Photo
          alt='Natalia Eframova'
          src={ natalia }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>AI Strategy Consultant</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Natalia Eframova</Custom.Name>
          <Custom.Location>Oxford, England</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>Description</Custom.Bio>
      </Custom.Person> */}
      <Custom.Person>
        <Custom.Photo
          alt='Gunnar Ek'
          src={ gunnar }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>Brand & Marketing Consultant</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Gunnar Ek</Custom.Name>
          <Custom.Location>Portsmouth, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>President of Drive Public Relations, Inc., specializing in innovative communication strategies for Fortune 500 companies, government institutions, and tech startups. B.Sc. in Engineering, Karlstad University, Sweden.</Custom.Bio>
      </Custom.Person>
      {/* <Custom.Person>
        <Custom.Photo
          alt='Eileen Granahan, MD, MA'
          src={ eileen }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>UX / QA Consultant</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Eileen Granahan, MD, MA</Custom.Name>
          <Custom.Location>Hanover, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>Pediatrician at Dartmouth Hitchcock Medical Center. Assistant Professor of Pediatrics at the Geisel School of Medicine at Dartmouth College. Residency in Pediatrics at Yale University Hospitals.</Custom.Bio>
      </Custom.Person> */}
      <Custom.Person>
        <Custom.Photo
          alt='Susan Murray, MD'
          src={ suki }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>UX / QA Consultant</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Susan Murray, MD</Custom.Name>
          <Custom.Location>Portsmouth, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>Teaching Associate of Tufts Medical School residency program. Family Medicine Physician, Appledore Family Medicine.</Custom.Bio>
      </Custom.Person>
      <Custom.Person>
        <Custom.Photo
          alt='Roshini Powell, MD'
          src={ roshini }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>UX / QA Consultant</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Roshini Pinto-Powell, MD</Custom.Name>
          <Custom.Location>Hanover, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>General Internal Medicine at Dartmouth Hitchcock Medical Center. Associate Professor of Medical Education, Geisel School of Medicine, Dartmouth College.</Custom.Bio>
      </Custom.Person>
      {/* <Custom.Person>
        <Custom.Photo
          alt='Chris Nice'
          src={ roxanne }
        />
        <Custom.Basics>
          <Custom.RoleWrapper>
            <Custom.Role>UX / QA Consultant</Custom.Role>
          </Custom.RoleWrapper>
          <Custom.Name>Chris Nice</Custom.Name>
          <Custom.Location>Hanover, NH</Custom.Location>
        </Custom.Basics>
        <Custom.Bio>Description</Custom.Bio>
      </Custom.Person> */}
    </Custom.People>
  </Custom.Container>
);


export default withMixpanel()(Team);
