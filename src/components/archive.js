import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  a {
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ArchiveList>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.frontmatter.slug}>
              <Link to={`/posts${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ArchiveList>
      </aside>
    </>
  )
}

export default Archive
