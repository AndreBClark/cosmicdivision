import React from "react"
import Layout from "../components/Base"
import Bio from "../components/bio"
import ContentContainer from "../components/ContentContainer"
const bio = () => {
  return (
    <Layout>
      <ContentContainer>
        <h1>About Andre</h1>
        <Bio />
      </ContentContainer>
    </Layout>
  )
}

export default bio
