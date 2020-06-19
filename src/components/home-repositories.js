import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Spacer from "../ui/spacer"
import RepositoriesSection from "../ui/repositories-section"
import SectionHeader from "../ui/section-header"
import SectionTitle from "../ui/section-title"

import HomeRepository from "./home-repository"

const HomeRepositories = ({ section }) => {
  const { githubData } = useStaticQuery(graphql`
    query {
      githubData {
        data {
          viewer {
            pinnedItems {
              edges {
                node {
                  id
                  name
                  description
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  const repositories = githubData.data.viewer.pinnedItems.edges

  return (
    <>
      <Spacer size={11} />

      <section>
        <SectionHeader>
          <SectionTitle>GitHub</SectionTitle>
        </SectionHeader>

        <Spacer size={11} />

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
