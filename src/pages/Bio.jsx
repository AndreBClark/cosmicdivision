import React from "react"
import Base from "../components/Base"
import BioCard from "../components/BioCard"
import ContentContainer from "../components/ContentContainer"
const Bio = () => {
  return (
    <Base>
      <ContentContainer>
        <h1>About Andre</h1>
        <BioCard />
      </ContentContainer>
    </Base>
  )
}

export default Bio
