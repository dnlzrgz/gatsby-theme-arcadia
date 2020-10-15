import React from "react"

import Repository from "./repository"
import RepositoryTitle from "./repository-title"
import GridCenter from "./grid-center"
import RepositoryDescription from "./repository-description"
import ProjectLink from "./project-link"
import ProjectLinkText from "./project-link-text"

const HomeRepository = ({ repository }) => {
  return (
    <>
      <Repository>
        <header>
          <RepositoryTitle>{repository.node.name}</RepositoryTitle>
        </header>
        <RepositoryDescription>
          {repository.node.description}
        </RepositoryDescription>
        <GridCenter>
          <ProjectLink href={repository.node.url} alt={repository.node.name}>
            <ProjectLinkText>Repository</ProjectLinkText>
          </ProjectLink>
        </GridCenter>
      </Repository>
    </>
  )
}

export default HomeRepository
