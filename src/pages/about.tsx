import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <title>About</title>
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
