import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Spacer from "./spacer"
import Section from "./section"
import SectionHeader from "./section-header"
import SectionTitle from "./section-title"
import SectionContent from "./section-content"

const HomeSection = ({ section }) => {
  return (
    <>
      <Spacer size={11} />

      <Section>
        <SectionHeader>
          <SectionTitle>{section.frontmatter.title}</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <MDXProvider>
            <MDXRenderer>{section.body}</MDXRenderer>
          </MDXProvider>
        </SectionContent>
      </Section>

      <Spacer size={7} />
    </>
  )
}

export default HomeSection
