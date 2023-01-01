import * as React from 'react';
import Contact from '../components/Forms/Contact';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="Contact" description="Send me a message" />
      <h1>Contact</h1>
      <Contact />
    </Layout>
  );
};

export default AboutPage;
