import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

// Static Query is everywhere. Doesn't accept parameters!
// Page Query accepts variables and uses context, but must be used on pages!

const PostLayout = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      />
    </Layout>
  )
}

export default PostLayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
