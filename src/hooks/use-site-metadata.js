import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          copy
          description
          email
          netlifyForm
          siteUrl
          title
          externalLinks {
            name
            url
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
