import { graphql, useStaticQuery } from "gatsby"

const useAllMdx = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
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
