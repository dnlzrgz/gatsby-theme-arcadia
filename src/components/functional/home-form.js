import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useStaticQuery, graphql } from "gatsby"

import Spacer from "../ui/spacer"
import SectionHeader from "../ui/section-header"
import SectionTitle from "../ui/section-title"
import Form from "../ui/form"
import FormLabel from "../ui/form-label"
import FormSubmit from "../ui/form-submit"
import FormInput from "../ui/form-input"
import FormTextarea from "../ui/form-textarea"

const HomeForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const [sended, setSended] = useState(false)
  const errorMessage = "Is not valid!"

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          netlifyForm
        }
      }
    }
  `)

  const onSubmit = data => {
    setSended(true)
    return
  }

  return (
    <>
      <Spacer size={11} />

      {sended ? (
        <SectionTitle>Thanks!</SectionTitle>
      ) : (
        <section>
          <SectionHeader>
            <SectionTitle>Contact</SectionTitle>
          </SectionHeader>

          <Spacer size={9} />

          <main>
            <Form
              name="Contact Form"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              data-netlify={`${site.siteMetadata.netlifyForm}`}
            >
              {/* Honeypot */}
              <input
                type="hidden"
                name="form-name"
                aria-label="form-name"
                value="Contact Form"
              />

              <FormLabel htmlFor="name">
                <p>Name {errors.name && <span>{errorMessage}</span>}</p>
                <FormInput
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  ref={register({ required: true, minLength: 2 })}
                  aria-label="name"
                />
              </FormLabel>

              <Spacer size={7} />

              <FormLabel htmlFor="email">
                <p>Email {errors.email && <span>{errorMessage}</span>}</p>
                <FormInput
                  type="email"
                  placeholder="Email"
                  name="email"
                  ref={register({ required: true, minLength: 2 })}
                  aria-label="name"
                />
              </FormLabel>

              <Spacer size={7} />

              <FormLabel htmlFor="message">
                <p>Message {errors.message && <span>{errorMessage}</span>}</p>
              </FormLabel>

              <FormTextarea
                name="message"
                wrap="soft"
                spellCheck
                ref={register({ required: true, minLength: 5 })}
                aria-label="name"
              />

              <Spacer size={14} />

              <FormSubmit type="submit" value="Submit" aria-label="submit" />
            </Form>
          </main>
        </section>
      )}

      <Spacer size={22} />
      <Spacer size={22} />
    </>
  )
}

export default HomeForm
