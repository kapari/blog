import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo/Seo';
import LandingSection from '../components/LandingSection/LandingSection';
import { StaticImage } from "gatsby-plugin-image";

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
      <LandingSection title="Partner Dance" list={danceList}>
        <StaticImage src="../images/dance.jpg" alt="" role="presentation" aspectRatio={9 / 5} />
      </LandingSection>
      <LandingSection title="Web Development" list={webList}>
        <StaticImage src="../images/code.png" alt="" role="presentation" aspectRatio={9 / 5} />
      </LandingSection>
      <LandingSection title="Art & Design" list={artList}>
        <StaticImage src="../images/art.jpg" alt="" role="presentation" aspectRatio={9 / 5} />
      </LandingSection>
    </Layout>
  );
};

export default IndexPage;
