import React from 'react'
import Base from '../components/Base'
import ContentContainer from '../components/ContentContainer'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { SolidBtn, OutlineBtn } from '../components/button'
import Panel from '../components/Panel'
import { rhythm } from '../../config/typography'
import PageHeading from '../components/PageHeading'
import { Subtitle } from '.'

const TextInput = styled.input`
  ${tw`block w-1/2 border-2 border-gray-300 rounded-lg text-white bg-gray-300 p-2`};
  :hover, :focus {
    ${tw`bg-gray-600 border-primary`}
  }
`
const Label = styled.label`
  ${tw`block my-2`}
`
export const DualWrapper = styled.div`
  margin-block: ${rhythm(1)};
  * + * {
    margin-inline: ${rhythm(2 / 3)};
  }
`

const Contact = () => {
  return (
    <Base>
      <ContentContainer>
        <PageHeading>Contact Me</PageHeading>
        <Subtitle>Get in touch with me</Subtitle>
        <Panel>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <Label>
              <small>
                Full Name
              </small>
              <TextInput type="text" name="name" id="name" placeholder="Nate Goullette" />
            </Label>
            <Label>
              Email Address
              <TextInput type="email" name="email" id="email" />
            </Label>
            <label>
              Subject
              <TextInput type="text" name="subject" id="subject" />
            </label>
            <Label>
              Message
              <TextInput name="message" id="message" rows="5" />
            </Label>
            <DualWrapper>
              <SolidBtn type="submit">
                Send
              </SolidBtn>
              <OutlineBtn type="reset" value="Clear">
                Reset
              </OutlineBtn>
            </DualWrapper>
          </form>
        </Panel>
      </ContentContainer>
    </Base>
  )
}
export default Contact
