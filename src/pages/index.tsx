import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo/Seo';

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Home | Ariel Kaplan"
        description="Ariel dances and codes in Portland, OR"
      />
      <div>
        <h1>Welcome</h1>
        <p>
          Edit <code>src/pages/index.js</code> to see this page update in
          real-time.{' '}
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
