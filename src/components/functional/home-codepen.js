import React from "react"

import useSitemetadata from "../../hooks/use-site-metadata"
import Spacer from "../ui/spacer"
import CodepenSection from "../ui/codepen-section"
import SectionHeader from "../ui/section-header"
import SectionTitle from "../ui/section-title"
import HomePen from "./home-pen"

const HomeCodepen = () => {
  const { codepen } = useSitemetadata()

  if (!codepen.length) return null

  return (
    <>
      <Spacer size={11} />

      <section>
        <SectionHeader>
          <SectionTitle>Codepen</SectionTitle>
        </SectionHeader>

        <Spacer size={14} />

        <CodepenSection>
          {codepen.map(pen => (
            <HomePen key={pen.name} pen={pen} />
          ))}
        </CodepenSection>
      </section>
      <Spacer size={7} />
    </>
  )
}

export default HomeCodepen
