import * as React from "react"
import { graphql } from "gatsby"

interface Props {
  readonly data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
      }
      html: string
    }
  }
}

const Template = ({
  data,
}: Props) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post">
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
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
