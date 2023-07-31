import React from 'react'
import { TextField } from '@material-ui/core'
import { BotField, Button, Form, Row } from './shared'

const Contact = () => {
  return (
    <>
      <Form 
        name="contact" 
        method="POST" 
        action='/thanks' 
        data-netlify="true" 
        data-netlify-honeypot="honey-bot" 
        // data-netlify-recaptcha='true'
      >
        <input type="hidden" name="form-name" value="contact" />
        <BotField type="hidden" name="honey-bot" defaultValue='' />
        <Row>
          <TextField variant='outlined' label="Name" name="name" defaultValue='' required></TextField>
          <TextField variant='outlined' label="Email" name="email" type='email' defaultValue='' required></TextField>
        </Row>
        <Row>
          <TextField variant='outlined' label="Message" name="message" defaultValue='' multiline minRows={4} required></TextField>
        </Row>
        <Row>
            <Button type="submit">Send</Button>
        </Row>
      </Form>
    </>
  )
}

export default Contact
