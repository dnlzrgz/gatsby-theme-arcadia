import React from "react"

import useGithubRepositories from "../hooks/use-github-repositories"
import Spacer from "./spacer"
import RepositoriesSection from "./repositories-section"
import SectionHeader from "./section-header"
import SectionTitle from "./section-title"
import HomeRepository from "./home-repository"

const HomeRepositories = () => {
  const repositories = useGithubRepositories()

  return (
    <>
      <Spacer size={11} />

      <section>
        <SectionHeader>
          <SectionTitle>GitHub</SectionTitle>
        </SectionHeader>

        <Spacer size={14} />

        <RepositoriesSection>
          {repositories.map(repo => (
            <HomeRepository key={repo.node.id} repository={repo} />
          ))}
        </RepositoriesSection>
      </section>
      <Spacer size={7} />
    </>
  )
}

export default HomeRepositories
