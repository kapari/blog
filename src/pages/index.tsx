import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo/Seo';
import LandingSection from '../components/LandingSection/LandingSection';

const danceList = [
  "Group Classes",
  "Private Lessons",
  "Practice Resources"
]

const webList = [
  "Accessibility",
  "User Experience",
  "UI Design"
]

const artList = [
  "Portraiture",
  "Photography",
  "Graphic Design",
]

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Home | Ariel Kaplan"
        description="Ariel dances and codes in Portland, OR"
      />
      {/* <h1>Hello</h1>
      <p>I create websites and applications that are pleasant to look at, easy to use, and accessible for everyone.</p>
      <p>I help people to be more present in their own bodies, so they can connect more deeply and confidently with others.</p> */}
      <LandingSection title="Partner Dance" list={danceList} />
      <LandingSection title="Web Development" list={webList} />
      <LandingSection title="Art & Design" list={artList} />
    </Layout>
  );
};

export default IndexPage;
