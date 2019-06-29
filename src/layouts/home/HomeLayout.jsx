import React, { Component } from 'react';
// import '../../lib/fontawesome';
import { withMixpanel } from 'gatsby-plugin-mixpanel';
import { GlobalStyles } from '../global_styles';

import Navbar from '../../components/navbar/Navbar';
import * as Custom from './homelayout_styles';


class HomeLayout extends Component {
  render() {
    return (
      <Custom.Layout>
        <GlobalStyles />
        <Navbar />
        <main>
          { this.props.children }
        </main>
      </Custom.Layout>
    );
  }
}


export default withMixpanel()(HomeLayout);
