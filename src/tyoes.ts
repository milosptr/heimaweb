export type EmailDataType = {
  field: string
  value: string
}

export type EmailBody = {
  from: string
  to: string
  subject: string
  data: EmailDataType[]
}
