import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import theme from './../../utils/colors';

const Row = styled.div`
  &:not(:first-child) {
    margin-top: 16px;
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
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="honey-bot">
        <input hidden name="form-name" value="contact" readOnly />
        <BotField name="honey-bot" defaultValue='' />
        <Row>
          <TextField variant='outlined' label="Name" name="name" defaultValue='' required></TextField>
        </Row>
        <Row>
          <TextField variant='outlined' label="Email" name="email" type='email' defaultValue='' required></TextField>
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
          <p>
            <Button type="submit">Send</Button>
          </p>
        </Row>
      </form>
    </>
  )
}

export default Contact
