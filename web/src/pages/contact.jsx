import React from 'react'
import 'twin.macro'

import { PageView, Panel } from '@/containers'
import { BioCard } from '@/sections'
import { BtnOutline, Btn, Label, TextInput } from '@/tokens'

const page = {
  title: 'Contact',
  heading: 'Contact',
  subtitle: 'Get In Touch With Me',
}

const Contact = () => {
  const { title, heading, subtitle, keywords } = page
  return (
    <PageView
      pageTitle={title}
      pageHeading={heading}
      pageSubtitle={subtitle}
      pageKeywords={keywords}>
      <BioCard />
      <NetlifyForm>
        <TextFieldGroup />
      </NetlifyForm>
    </PageView>
  )
}

const NetlifyForm = ({ children }) => (
  <Panel>
    <form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      data-netlify="true">
      <div tw="flex flex-col md:(flex-wrap h-64)">
        <input tw="hidden" name="name" netlify-honeypot="bot-field" />
        <input tw="hidden" name="email" netlify-honeypot="bot-field2" />
        <input tw="hidden" name="message" netlify-honeypot="bot-field3" />
        {children}
      </div>
      <div data-netlify-recaptcha="true"></div>
      <ButtonGroup />
    </form>
  </Panel>
)

const TextFieldGroup = () =>
  contactFields.map((field) => {
    const isTextArea = field.type === 'textarea'
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

const TextArea = ({ ...props }) => (
  <textarea {...props} cols="30" rows="8" tw="w-3/4 h-52" />
)

const ButtonGroup = () => (
  <div tw="flex -mx-2 md:mx-0">
    <Btn tw="w-full md:w-auto" type="submit">
      Send
    </Btn>
    <BtnOutline tw="w-full md:w-auto" type="reset" value="Clear">
      Reset
    </BtnOutline>
  </div>
)

const contactFields = [
  {
    label: 'Full Name',
    type: 'text',
    id: 'fullName',
    placeholder: 'First Last',
    rows: '1',
  },
  {
    label: 'Email',
    type: 'email',
    id: 'emailAddress',
    placeholder: 'name@domain.org',
    rows: '1',
  },
  {
    label: 'Subject',
    type: 'text',
    id: 'messageSubject',
    placeholder: 'Your Subject',
    rows: '1',
  },
  {
    label: 'Message',
    type: 'textarea',
    id: 'messageText',
    placeholder: 'Your Message',
    rows: '5',
  },
]

export default Contact
