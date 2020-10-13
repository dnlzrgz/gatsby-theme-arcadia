import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Spacer from "../ui/spacer"
import Section from "../ui/section"
import SectionHeader from "../ui/section-header"
import SectionTitle from "../ui/section-title"
import SectionContent from "../ui/section-content"

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
