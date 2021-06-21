import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

const AboutPage = () => {
  return (
    <Layout>
      <Seo
        title="About"
        description="Background and Contact"
      />
      <h1>About</h1>
      <p>
        Here is some stuff about me.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
};

export default AboutPage;
