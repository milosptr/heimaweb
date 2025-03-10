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

export const sendSlackEmail = async (data: EmailDataType[]) => {
  const subject =
    data?.find((item) => item['field'] === 'subject')?.value || 'Feedback form from Heima website'

  const body = {
    from: 'Heima Feedback <onboarding@resend.dev>',
    to: ['feedback-website-aaaaps6lhyyrmm6o7apmlkdx6e@heima-global.slack.com'],
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

export const sendOfficeEmail = async (data: EmailDataType[]) => {
  const subject =
    data?.find((item) => item['field'] === 'subject')?.value || 'Feedback form from Heima website'

  const body = {
    from: 'Heima Feedback <onboarding@resend.dev>',
    to: ['milos@getheima.com'],
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
  await sendSlackEmail(data)
  await sendOfficeEmail(data)
  return await formSubmissionSend(formID, data)
}
