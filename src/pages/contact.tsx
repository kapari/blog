import * as React from 'react';
import Contact from '../components/Forms/Contact';
import Subscribe from '../components/Forms/Subscribe';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="Contact" description="Send me a message" />
      <h1>Contact</h1>
      <h2>Looking for Dance Updates?</h2>
      <p>Get classes and events delivered direct a few times a month.</p>
      <Subscribe />
      <hr />
      <h2>Other Questions or Comments?</h2>
      <p>Send me an email.</p>
      <Contact />
    </Layout>
  );
};

export default AboutPage;
