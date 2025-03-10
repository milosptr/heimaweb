import { FeedbackTemplate } from '@/components/EmailTemplates/FeedbackTemplate'
import { Resend } from 'resend'
import { EmailBody } from '@/tyoes'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = (await request.json()) as EmailBody

  try {
    const { data, error } = await resend.emails.send({
      from: body.from,
      to: body.to,
      subject: body.subject,
      react: FeedbackTemplate({ data: body.data }),
    })
    if (error) {
      return Response.json({ error }, { status: 500 })
    }
    return Response.json(data)
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 })
  }
}
