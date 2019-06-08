import React from 'react';
// import '../../lib/fontawesome';
import { GlobalStyles } from '../global_styles';

import Navbar from '../../components/navbar/Navbar';
import * as Custom from './homelayout_styles';


const HomeLayout = ({ children }) => (
  <Custom.Layout>
    <GlobalStyles />
    <Navbar />
    <main>
      { children }
    </main>
  </Custom.Layout>
);


export default HomeLayout;
