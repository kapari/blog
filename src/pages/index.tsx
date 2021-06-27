import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import LandingSection from '../components/Landing/LandingSection';
import LandingSplit from '../components/Landing/LandingSplit';
import { StaticImage } from 'gatsby-plugin-image';

const danceList = ['Group Classes', 'Private Lessons', 'Practice Resources'];

const webList = ['Accessibility', 'User Experience', 'UI Design'];

const IndexPage = () => {
  const DanceSection = (
    <LandingSection
      id="dance"
      title="Partner Dance"
      list={danceList}
      theme="light"
      imgRight
    >
      <StaticImage
        src="../images/dance1.jpg"
        alt=""
        role="presentation"
        aspectRatio={45 / 26}
      />
    </LandingSection>
  )
  const DevSection = (
    <LandingSection
      id="web"
      title="Web Development"
      list={webList}
      theme="dark"
    >
      <StaticImage
        src="../images/code1.png"
        alt=""
        role="presentation"
        aspectRatio={45 / 26}
      />
    </LandingSection>
  )
  return (
    <Layout>
      <Seo
        title="Ariel Kaplan: Partner Dance & Web Development"
        description="Ariel dances and codes in Portland, OR"
      />
      {/* <LandingHero /> */}
      <LandingSplit left={DanceSection} right={DevSection} />
      {/* <LandingSection id="dance" title="Partner Dance" list={danceList}>
          <StaticImage
            src="../images/dance1.jpg"
            alt=""
            role="presentation"
            aspectRatio={45 / 26}
          />
        </LandingSection>
        <LandingSection id="web" title="Web Development" list={webList}>
          <StaticImage
            src="../images/code1.png"
            alt=""
            role="presentation"
            aspectRatio={45 / 26}
          />
        </LandingSection> */}
      {/* <LandingSection id="art" title="Art & Design" list={artList}>
        <StaticImage
          src="../images/art1.jpg"
          alt=""
          role="presentation"
          aspectRatio={45 / 26}
        />
      </LandingSection> */}
    </Layout>
  );
};

export default IndexPage;
