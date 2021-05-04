import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';
import Layout from '../components/Layout';

interface Post {
  node: {
    id: string;
    frontmatter: {
      title: string;
      slug: string;
      description: string;
      date: string;
    };
  };
}

const PostsList: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { 
          frontmatter: { 
            category: { 
              eq: "blog" 
            }, 
            published: { 
              eq: true 
            } 
          } 
        }
        sort: { 
          fields: frontmatter___date, 
          order: DESC 
        }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              slug
              description
              date(formatString: "MMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  const posts: Post[] = allMarkdownRemark.edges;

  return (
    <Layout>
      <ul>
        {posts.map((item) => {
          const {
            id,
            frontmatter: { title, slug, description, date }
          } = item.node;

          return (
            <li key={id}>
              <Link to={slug}>
                <h2>{title}</h2>
                <div>{date}</div>
                <p>{description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default PostsList;
