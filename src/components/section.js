import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Sections = ({ section }) => {
  return (
    <section>
      <header>
        <h2>{section.frontmatter.title}</h2>
      </header>
      <main>
        <MDXProvider>
          <MDXRenderer>{section.body}</MDXRenderer>
        </MDXProvider>
      </main>
    </section>
  )
}

export default Sections
