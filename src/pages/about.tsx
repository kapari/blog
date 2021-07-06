import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" description="Background and Contact" />
      <h1>About</h1>
      <h2>Dance</h2>
      <p>
        I help people to be more present in their own bodies, so they can
        connect more deeply and confidently with others.
      </p>
      <p>
        As a <a href="https://hsperson.com/">Highly Sensitive Person</a> and
        an introvert, dance was the first place where I felt my sensitivity was an asset, and that was incredibly healing. I've also found dance to be a source of personal growth: practicing boundaries, self-expression, public speaking, leadership, and claiming my own space in this
        loud and busy world.
      </p>
      <p>
        It is a joy to have a mutually respectful, connected, and playful dance. It is a joy to help others find that place with me.
      </p>
      <figure>
        <blockquote>
          To pay attention, this is our endless and proper work.
        </blockquote>
        <figcaption>― Mary Oliver</figcaption>
      </figure>
      <hr />
      <h2>Technology</h2>
      <p>I create websites and applications that are pleasant to look at, easy to use, and accessible for everyone.</p>
      <p>I love learning and solving problems, and the technology field involves much of both. I grew up on art classes and was a Drawing major in college, and I apply my portraiture-level attention to detail and much of that training to my front-end development projects, even when I'm not explicitly the designer.</p>
      <p>The best development work starts with empathy. What problem are we really solving?</p>
      <figure>
        <blockquote>
          What we know matters, but who we are matters more.
        </blockquote>
        <figcaption>― Brené Brown</figcaption>
      </figure>
      {/* <hr />
      <h2>My Values</h2>
      <ul>
        <li>Honesty & transparancy</li>
        <li>Integrity & respect</li>
        <li>Curiosity & deep listening</li>
        <li>Collaboration & continuous learning</li>
      </ul>
      <hr />
      <h2>Front End Development</h2>
      <h3>HTML & CSS</h3>
      <ul>
        <li>HTML5</li>
        <li>WAI-ARIA</li>
        <li>Scss, Less, Styled Components, CSS Modules</li>
        <li>Cross-browser compatibility</li>
      </ul>
      <h3>JavaScript</h3>
      <ul>
        <li>ES5+, TypeScript</li>
        <li>React, Vue, Nuxt, Gatsby</li>
        <li>Redux</li>
        <li>APIs, JSON, GraphQL</li>
      </ul>
      <h3>Accessibility</h3>
      <ul>
        <li>WCAG 2.1</li>
        <li>Performance</li>
      </ul>
      <h3>UI/UX</h3>
      <ul>
        <li>Wireframes</li>
        <li>Prototypes</li>
        <li>User Interviews</li>
      </ul>
      <h3>Processes & Tools</h3>
      <ul>
        <li>Agile, Scrum, Kanban</li>
        <li>Azure DevOps, Jira, Confluence</li>
        <li>MS Suite, Google Suite</li>
        <li>Balsamiq, Figma</li>
      </ul> */}
    </Layout>
  );
};

export default AboutPage;
