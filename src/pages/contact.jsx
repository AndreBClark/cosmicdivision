import React from 'react'
import ContentContainer from '../components/ContentContainer'
import BioCard from '../components/BioCard'
import { BtnOutline, Btn } from '../components/button'
import Panel from '../components/Panel'
import PageHeading from '../components/PageHeading'
import { Subtitle } from '../components/Hero'
import { Label, TextInput, DualWrapper } from '../components/TextInput'
import Seo from '../components/Seo'

const Contact = () => {
  return (
    <>
      <Seo
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
            <Label>
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
