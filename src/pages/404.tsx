import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo/Seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo
        title="Page not Found"
        description="404 Error"
      />
      <h1>Page not found</h1>
      <p>
        Sorry, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
