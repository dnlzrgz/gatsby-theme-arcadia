import { graphql, useStaticQuery } from "gatsby"

const useAllMdx = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
        nodes {
          frontmatter {
            title
            order
          }
          body
        }
      }
    }
  `)

  return data.allMdx.nodes
}

export default useAllMdx
