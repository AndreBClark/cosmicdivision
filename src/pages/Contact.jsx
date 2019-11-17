import Button, { SolidButton } from '../components/button'
import React from "react"
import Base from "../components/Base"
import ContentContainer from "../components/ContentContainer"
import styled from "styled-components"
import tw from "tailwind.macro"
import Panel from "../components/Panel"
import PageHeading from "../components/PageHeading"

const TextInput = styled.input`
  border: solid 3px ${props => props.theme.colors.primary};
  ${tw` block rounded-lg text-white bg-transparent p-2`}
`
const Label = styled.label`
  ${tw`block my-2`}
`

const Contact = () => {
  return (
    <Base>
      <ContentContainer>
        <PageHeading>Contact Me</PageHeading>
        <h3>Get in touch with me</h3>
        <Panel>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <Label>
              Name
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
            <div>
              <SolidBtn type="submit">Send</SolidBtn>
              <OutlineBtn type="reset" value="Clear">
                Reset
              </OutlineBtn>
            </div>
          </form>
        </Panel>
      </ContentContainer>
    </Base>
  )
}
export default Contact