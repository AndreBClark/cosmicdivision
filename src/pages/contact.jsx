import React from 'react'
import 'twin.macro'

import { PageContained } from 'components/PageBase'

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
      </NetlifyForm>
    </PageContained>
  )
}



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
