import { EmailDataType } from '@/tyoes'
import { getClientSideURL } from './getURL'

export const formSubmissionSend = async (formID: string | undefined, dataToSend: object) => {
  return await fetch(`${getClientSideURL()}/api/form-submissions`, {
    body: JSON.stringify({
      form: formID,
      submissionData: dataToSend,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
}

export const sendUserEmail = async (data: EmailDataType[]) => {
  const email = data?.find((item) => item['field'] === 'email')?.value || ''

  const body = {
    from: 'Heima Feedback <no-reply@getheima.com>',
    to: [email],
    subject: 'Thank you for your feedback',
    data: data,
    userFeedback: true,
  }

  return await fetch(`/api/send`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
}

export const sendOfficeEmail = async (data: EmailDataType[]) => {
  const subject =
    data?.find((item) => item['field'] === 'subject')?.value || 'Feedback form from Heima website'
  const name = data?.find((item) => item['field'] === 'name')?.value || 'Heima Feedback'
  const from = data?.find((item) => item['field'] === 'email')?.value || 'hello@getheima.com'

  const body = {
    from: `${name} <${from}>`,
    to: [
      'hello@getheima.com',
      'feedback-website-aaaaps6lhyyrmm6o7apmlkdx6e@heima-global.slack.com',
    ],
    subject: subject,
    data: data,
  }

  return await fetch(`/api/send`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
}

export const sendEmail = async (formID: string | undefined, data: EmailDataType[]) => {
  await sendOfficeEmail(data)
  // await sendUserEmail(data)
  return await formSubmissionSend(formID, data)
}
