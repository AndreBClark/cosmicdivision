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
  border: solid 3px ${props => props.theme.colors.primary};
  ${tw`block w-full rounded-lg text-white bg-transparent p-2`}
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
              Full Name
              <TextInput type="text" name="name" id="name" />
            </Label>
            <Label>
              Email
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
