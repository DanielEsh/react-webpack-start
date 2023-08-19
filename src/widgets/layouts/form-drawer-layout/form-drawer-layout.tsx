import { useNavigate } from 'react-router-dom'
import { Drawer } from 'shared/ui-kit/drawer'
import { Form } from 'shared/ui-kit/form'
import { useForm } from 'shared/ui-kit/form/use-form'
import { Button } from 'shared/ui-kit/button'
import { useEffect } from 'react'
import { CategoryForm } from 'entities/categories/ui/form/types'
import { TypeWithChildren } from 'shared/ui-kit/types'

export interface Props extends TypeWithChildren {
  loading?: boolean
  error?: boolean
  success?: boolean
  data?: any
  formSchema: any
  defaultValues: any
  backLinkPath: string
  onSubmit: (form: any) => void
}

export const FormDrawerLayout = (props: Props) => {
  const {
    loading,
    error,
    success = true,
    data,
    formSchema,
    defaultValues,
    backLinkPath,
    children,
    onSubmit,
  } = props
  const navigate = useNavigate()

  const close = () => {
    navigate(backLinkPath)
  }

  const formMethods = useForm<CategoryForm>(formSchema, defaultValues)

  const { reset } = formMethods

  const handleSubmit = async (form: any) => {
    await onSubmit(form)
    close()
  }

  useEffect(() => {
    reset(data)
  }, [data])

  return (
    <Drawer
      opened
      onClose={close}
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
            <Drawer.Header>
              <h2>Update category</h2>
            </Drawer.Header>

            {children}

            <Drawer.Footer>
              <div className="flex gap-2 px-4 pb-6">
                <Button
                  type="submit"
                  variant="primary"
                >
                  Update
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={close}
                >
                  Cancel
                </Button>
              </div>
            </Drawer.Footer>
          </>
        )}
      </Form>
    </Drawer>
  )
}
