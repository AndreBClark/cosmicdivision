import React from "react"
import Layout from "../components/Base"
import BioCard from "../components/BioCard"
import ContentContainer from "../components/ContentContainer"
const Bio = () => {
  return (
    <Layout>
      <ContentContainer>
        <h1>About Andre</h1>
        <BioCard />
      </ContentContainer>
    </Layout>
  )
}

export default Bio
