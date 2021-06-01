import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo/Seo';
import LandingSection from '../components/Landing/LandingSection/LandingSection';
import LandingHero from '../components/Landing/LandingHero/LandingHero';
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
        title="Ariel Kaplan: Partner Dance & Web Development"
        description="Ariel dances and codes in Portland, OR"
      />
      <LandingHero />
      <LandingSection id="dance" title="Partner Dance" list={danceList}>
        <StaticImage src="../images/dance1.jpg" alt="" role="presentation" aspectRatio={45 / 26} />
      </LandingSection>
      <LandingSection id="web" title="Web Development" list={webList}>
        <StaticImage src="../images/code1.png" alt="" role="presentation" aspectRatio={45 / 26} />
      </LandingSection>
      <LandingSection id="art" title="Art & Design" list={artList}>
        <StaticImage src="../images/art1.jpg" alt="" role="presentation" aspectRatio={45 / 26} />
      </LandingSection>
    </Layout>
  );
};

export default IndexPage;
