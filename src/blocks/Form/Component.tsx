'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { fields } from './fields'
import { Fade } from 'react-awesome-reveal'
import { sendEmail } from '@/utilities/sendEmail'

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: SerializedEditorState
}

const LoadingSpinner = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 113" width={100}>
    <path
      fill="none"
      stroke="#30995B"
      stroke-width="15"
      stroke-linecap="round"
      stroke-dasharray="100 235"
      stroke-dashoffset="0"
      d="M95 108H5V38.5344L49.8795 6.15978L95 38.5421V108Z"
    >
      <animate
        attributeName="stroke-dashoffset"
        calcMode="spline"
        dur="50"
        values="5705;-5705"
        keySplines="0 0 1 1"
        repeatCount="indefinite"
      ></animate>
    </path>
  </svg>
)

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
  } = props

  const formMethods = useForm({
    defaultValues: formFromProps.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        })) as unknown as { field: string; value: string }[]

        setIsLoading(true)
        try {
          const req = await sendEmail(formID, dataToSend)
          const res = await req.json()

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setTimeout(() => {
            setIsLoading(false)
            setHasSubmitted(true)
          }, 1500)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <div className="container lg:max-w-[48rem]">
      <Fade delay={300} fraction={0.5} triggerOnce>
        <div className="flex flex-col justify-center h-screen">
          {enableIntro && introContent && !hasSubmitted && (
            <RichText className="mb-6 lg:mb-10" data={introContent} enableGutter={false} />
          )}
          <div className="p-4 lg:p-6 border border-border rounded-sm bg-card">
            <FormProvider {...formMethods}>
              {!isLoading && hasSubmitted && confirmationType === 'message' && (
                <RichText data={confirmationMessage} />
              )}
              {isLoading && !hasSubmitted && (
                <div className="flex flex-col justify-center items-center h-32">
                  <LoadingSpinner />
                  <div className="text-primary mt-2">Sending your message...</div>
                </div>
              )}
              {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
              {!hasSubmitted && (
                <form
                  id={formID}
                  onSubmit={handleSubmit(onSubmit)}
                  className={isLoading ? 'hidden' : ''}
                >
                  <div className="mb-4 last:mb-0">
                    {formFromProps &&
                      formFromProps.fields &&
                      formFromProps.fields?.map((field, index) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const Field: React.FC<any> =
                          fields?.[field.blockType as keyof typeof fields]
                        if (Field) {
                          return (
                            <div className="mb-6 last:mb-0" key={index}>
                              <Field
                                form={formFromProps}
                                {...field}
                                {...formMethods}
                                control={control}
                                errors={errors}
                                register={register}
                                disabled={isLoading}
                              />
                            </div>
                          )
                        }
                        return null
                      })}
                  </div>

                  <Button form={formID} type="submit" variant="default">
                    {submitButtonLabel}
                  </Button>
                </form>
              )}
            </FormProvider>
          </div>
        </div>
      </Fade>
    </div>
  )
}
