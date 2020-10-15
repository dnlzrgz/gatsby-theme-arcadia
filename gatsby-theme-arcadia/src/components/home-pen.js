import React from "react"

import Pen from "./pen"
import PenTitle from "./pen-title"
import PenScreenshot from "./pen-screenshot"
import PenMain from "./pen-main"
import RepositoryDescription from "./repository-description"
import ProjectLink from "./project-link"
import ProjectLinkText from "./project-link-text"

const HomePen = ({ pen }) => {
  return (
    <Pen>
      <header>
        <PenTitle>{pen.name}</PenTitle>
      </header>
      <PenScreenshot
        src={`/images/${pen.image}`}
        alt={pen.name}
        loading="lazy"
      />
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
