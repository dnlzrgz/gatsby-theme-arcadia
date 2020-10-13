import { graphql, useStaticQuery } from "gatsby"

const useGithubRepositories = () => {
  const data = useStaticQuery(graphql`
    query {
      githubData {
        data {
          viewer {
            pinnedItems {
              edges {
                node {
                  id
                  name
                  description
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.githubData.data.viewer.pinnedItems.edges
}

export default useGithubRepositories
