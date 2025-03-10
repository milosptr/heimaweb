import { EmailDataType } from '@/tyoes'
import { Body, Container, Head, Html, Preview, Row, Section, Text } from '@react-email/components'
import * as React from 'react'

interface EmailTemplateProps {
  data: EmailDataType[]
}

export const FeedbackTemplate = ({ data }: EmailTemplateProps) => {
  const subject = data.find((d) => d.field === 'subject')?.value
  const message = data.find((d) => d.field === 'message')?.value
  const name = data.find((d) => d.field === 'name')?.value
  const email = data.find((d) => d.field === 'email')?.value

  return (
    <Html>
      <Head />

      <Body style={main}>
        <Preview>{subject ?? message ?? ''}</Preview>
        <Container style={container}>
          <Section>
            <svg
              width="40"
              height="40"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_14470_29)">
                <path
                  d="M197.248 0H58.7523C26.3043 0 0 26.3043 0 58.7523V197.248C0 229.696 26.3043 256 58.7523 256H197.248C229.696 256 256 229.696 256 197.248V58.7523C256 26.3043 229.696 0 197.248 0Z"
                  fill="#30995B"
                />
                <path
                  d="M157.989 111.523V115.997L128.084 95.1089L98.0108 115.751V111.523V56.3582H64V199.642H98.0108V153.104L127.916 131.377L157.989 152.951V199.642H192V56.3582H157.989V111.523Z"
                  fill="#F7F2EA"
                />
              </g>
              <defs>
                <clipPath id="clip0_14470_29">
                  <rect width="256" height="256" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Section>
          <Section style={{ paddingBottom: '20px' }}>
            <Row>
              <Text style={heading}>Here&apos;s what {name ?? email} wrote</Text>
              <Text style={review}>
                {subject}: {message}
              </Text>
              <Text style={paragraph}>
                If you&apos;d like to respond to this review, you can do so by replying to this{' '}
                {email} email.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
}

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
}

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
}

const review = {
  ...paragraph,
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
}
