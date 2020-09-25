import React from "react"

import Pen from "../ui/pen"
import PenTitle from "../ui/pen-title"
import PenScreenshot from "../ui/pen-screenshot"
import PenMain from "../ui/pen-main"
import RepositoryDescription from "../ui/repository-description"
import ProjectLink from "../ui/project-link"
import ProjectLinkText from "../ui/project-link-text"

const HomePen = ({ pen }) => {
  return (
    <Pen>
      <header>
        <PenTitle>{pen.name}</PenTitle>
      </header>
      <PenScreenshot src={pen.image} alt={pen.name} />
      <PenMain>
        <RepositoryDescription>{pen.description}</RepositoryDescription>
        <div style={{ marginRight: "auto" }}>
          <ProjectLink href={pen.url} alt={pen.name}>
            <ProjectLinkText>Link to Pen</ProjectLinkText>
          </ProjectLink>
        </div>
      </PenMain>
    </Pen>
  )
}

export default HomePen
