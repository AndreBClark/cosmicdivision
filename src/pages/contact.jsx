import React from 'react'
import 'twin.macro'

import { PageContained } from 'components/PageBase'
import Panel from 'components/Panel'
import BioCard from 'components/BioCard'
import { BtnOutline, Btn } from 'components/button'
import { Label, TextInput } from 'components/TextInput'

const page = {
  title: "Contact",
  heading: "Contact",
  subtitle: "Get In Touch With Me",
}

const Contact = () => {
  const { title, heading, subtitle, keywords } = page;
  return (
    <PageContained
      pageTitle={title}
      pageHeading={heading}
      pageSubtitle={subtitle}
      pageKeywords={keywords}
    >
      <BioCard />
      <NetlifyForm>
        <TextFieldGroup />
      </NetlifyForm>
    </PageContained>
  )
}



const NetlifyForm = ({children}) => (
  <Panel>
    <form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      data-netlify="true"
    >
      <div tw="flex flex-col md:(flex-wrap h-64)">
        <input tw="hidden" name="bot-field" netlify-honeypot="bot-field" />
        <input tw="hidden" name="bot-field2" netlify-honeypot="bot-field2" />
        <input tw="hidden" name="bot-field23" netlify-honeypot="bot-field3" />
        {children}
      <div data-netlify-recaptcha="true"></div>
      </div>
      <ButtonGroup />
    </form>
  </Panel>
)


const TextFieldGroup = () => (
  contactFields.map(field => {
    const isTextArea = field.type === "textarea";
    return (
      <Label tw="md:mx-4">
        {field.label}
        <TextInput
          as={isTextArea && TextArea}
          type={field.type}
          name={field.id}
          id={field.id}
          placeholder={field.placeholder}
          rows={field.rows}
        />
      </Label>
    )
  })
)

const TextArea = ({ ...props}) => (
  <textarea {...props} cols="30" rows="8" tw="w-3/4 h-52" />
)

const ButtonGroup = () => (
  <div tw="flex -mx-2 md:mx-0">
    <Btn
      tw="w-full md:w-auto"
      type="submit"
    >
      Send
    </Btn>
    <BtnOutline
      tw="w-full md:w-auto"
      type="reset"
      value="Clear">
      Reset
    </BtnOutline>
  </div>
)


const contactFields = [
  {
    label: "Full Name",
    type: "text",
    id: "name",
    placeholder: "First Last",
    rows: "1"
  },
  {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "name@domain.org",
    rows: "1"
  },
  {
    label: "Subject",
    type: "text",
    id: "subject",
    placeholder: "Your Subject",
    rows: "1"
  },
  {
    label: "Message",
    type: "textarea",
    id: "message",
    placeholder: "Your Message",
    rows: "5"
  }
]


export default Contact
