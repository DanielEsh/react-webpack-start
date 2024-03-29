import { useNavigate } from 'react-router-dom'
import { Button, Drawer, Form } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import { useEffect } from 'react'
import { TypeWithChildren } from 'shared/ui-kit/types'
import { type ZodType } from 'zod'
import { type FieldValues, type DefaultValues } from 'react-hook-form'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { productFormSchema } from 'entities/products'
export interface Props<FormValues> extends TypeWithChildren {
  loading?: boolean
  error?: boolean
  success?: boolean
  data?: FormValues
  formSchema: ZodType<FormValues>
  defaultValues: DefaultValues<FormValues>
  backLinkPath: string
  submitButtonLabel: string
  onSubmit: (form: FormValues) => Promise<void>
}

export const FormDrawerLayout = <FormValues extends FieldValues>(
  props: Props<FormValues>,
) => {
  const {
    loading,
    error,
    success = true,
    data,
    formSchema,
    defaultValues,
    backLinkPath,
    children,
    submitButtonLabel,
    onSubmit,
  } = props
  const navigate = useNavigate()

  const close = () => {
    navigate(backLinkPath)
  }

  const formMethods = useForm<FormValues>(formSchema, defaultValues)

  const { reset, formState } = formMethods

  const handleSubmit = async (form: any) => {
    await onSubmit(form)
    close()
  }

  useEffect(() => {
    reset(data)
  }, [data])

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      <Form
        className="flex h-full flex-col"
        methods={formMethods}
        onSubmit={handleSubmit}
      >
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}

        {success && (
          <>
            <DrawerHeader>
              <h2>Update category</h2>
            </DrawerHeader>
            {children}
            CREATE FORM
            <pre className="bg-slate-950 mt-2 w-[340px] rounded-md p-4">
              <code className="text-black">
                {JSON.stringify(formState, null, 2)}
              </code>
            </pre>
            <DrawerFooter>
              <div className="flex gap-2 px-4 pb-6">
                <Button
                  type="submit"
                  variant="primary"
                >
                  {submitButtonLabel}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={close}
                >
                  Cancel
                </Button>
              </div>
            </DrawerFooter>
          </>
        )}
      </Form>
    </Drawer>
  )
}
