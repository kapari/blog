import * as React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout';
import Seo from '../components/Seo/Seo';

interface Props {
  readonly data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description?: string
        date: string
        slug: string
        category: string
      }
      html: string,
    }
  }
}

const Template = ({
  data,
}: Props) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description || ''}
        pathname={frontmatter.slug}
        article
      />
      <h1>{frontmatter.title}</h1>
      {frontmatter.date && <p>{frontmatter.date}</p>}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
