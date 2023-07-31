import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import theme from './../../utils/colors';

const Form = styled.form`
  width: 100%;
`

const Row = styled.div`
  &:not(:first-child) {
    margin-top: 16px;
  }
  > .MuiFormControl-root {
    display: flex;
  }
`

const BotField = styled.input`
  display: none; // don't show to screenreaders 
`

const Button = styled.button`
  transition: background-color 0.2s ease-in-out;
  border-radius: 0;
  border: none;
  background-color: ${theme.light.primary};
  padding: 0 1em;
  line-height: 3;
  font-weight: 700;
  color: ${theme.light.primaryContrast};
  cursor: pointer;
  &:hover, &:active, &:focus {
    background-color: ${theme.light.primaryAlt};
  }
`

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
          <TextField variant='outlined' label="Your Name" name="name" defaultValue='' required></TextField>
        </Row>
        <Row>
          <TextField variant='outlined' label="Your Email" name="email" type='email' defaultValue='' required></TextField>
        </Row>
        {/* <Row>
          <FormControl component="fieldset">
            <FormLabel component="legend">Interest</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={true} onChange={() => console.log('checked')} name="webdev" />}
                label="Web Development"
              />
              <FormControlLabel
                control={<Checkbox checked={false} onChange={() => console.log('check')} name="dance" />}
                label="Partner Dance"
              />
            </FormGroup>
          </FormControl>
        </Row> */}
        <Row>
          <TextField variant='outlined' label="Message" name="message" defaultValue='' multiline minRows={4}></TextField>
        </Row>
        <Row>
            <Button type="submit">Send</Button>
        </Row>
      </Form>
    </>
  )
}

export default Contact
