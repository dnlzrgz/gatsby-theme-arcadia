import React from "react"

import Repository from "../ui/repository"
import RepositoryTitle from "../ui/repository-title"
import GridCenter from "../ui/grid-center"
import RepositoryDescription from "../ui/repository-description"
import ProjectLink from "../ui/project-link"
import ProjectLinkText from "../ui/project-link-text"

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
