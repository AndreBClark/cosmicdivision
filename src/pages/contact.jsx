import React from 'react'
import ContentContainer from '../components/ContentContainer'
import BioCard from '../components/BioCard'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { BtnOutline, Btn } from '../components/button'
import Panel from '../components/Panel'
import PageHeading from '../components/PageHeading'
import { Subtitle } from '.'
import SEO from '../components/SEO'

const TextInput = styled.input`
  ${tw`block p-2 text-white bg-gray-300 border-2 border-gray-300 rounded-lg w-72`}
  :hover,
  :focus {
    ${tw`bg-gray-600 border-primary`}
  }
`
const Label = styled.label`
  ${tw`block my-2`}
`
export const DualWrapper = styled.div`
  ${tw`xl:my-8`}
`

const Contact = () => {
  return (
    <>
      <SEO
        title={'Contact'}
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <ContentContainer>
        <PageHeading>Contact Me</PageHeading>
        <Subtitle>Get in touch with me</Subtitle>
        <BioCard />
        <Panel>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <Label>
              Full Name
              <TextInput
                type="text"
                name="name"
                id="name"
                placeholder="First Last"
              />
            </Label>
            <Label>
              Email Address
              <TextInput
                type="email"
                name="email"
                id="email"
                placeholder="name@example.com"
              />
            </Label>
            <Label for="subject">
              Subject
              <TextInput
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </Label>
            <Label>
              Message
              <TextInput
                name="message"
                id="message"
                rows="5"
                placeholder="Message"
              />
            </Label>
            <DualWrapper>
              <Btn type="submit">Send</Btn>
              <BtnOutline type="reset" value="Clear">
                Reset
              </BtnOutline>
            </DualWrapper>
          </form>
        </Panel>
      </ContentContainer>
    </>
  )
}
export default Contact
