import React from 'react';

import Layout from '../layouts/home/HomeLayout';
import Hero from '../components/hero/Hero';
import Speed from '../components/speed/Speed';
import Team from '../components/team/Team';
import Footer from '../components/footer/Footer';
import SEO from '../components/seo';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`scope`, `ehr`, `mfp`]} />
    <Hero />
    <Speed />
    <Team />
    <Footer />
  </Layout>
);


export default IndexPage;
