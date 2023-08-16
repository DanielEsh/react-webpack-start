import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Drawer } from 'shared/ui-kit/drawer'
import { useForm } from 'shared/ui-kit/form/use-form'
import { Form } from 'shared/ui-kit/form/form'
import { Button } from 'shared/ui-kit/button'
import { Input, TextArea } from 'shared/ui-kit/form-controls'
import {
  useCreateCategoryMutation,
  useUpdateCategories,
} from 'entities/categories/api/queries'
import { useNotification } from 'shared/notification'

const createCategoryFormSchema = z.object({
  slug: z.string().nonempty({
    message: 'Must be required',
  }),
  name: z.string().nonempty({
    message: 'Must be required',
  }),
  description: z.string().optional(),
})

type CreateCategoryForm = z.infer<typeof createCategoryFormSchema>

const CategoryCreatePage = () => {
  const navigate = useNavigate()

  const { mutate: createCategoryMutation } = useCreateCategoryMutation()
  const { updateCategories } = useUpdateCategories()
  const { showNotification } = useNotification()

  const defaultValues: CreateCategoryForm = {
    slug: '',
    name: '',
  }

  const formMethods = useForm<CreateCategoryForm>(
    createCategoryFormSchema,
    defaultValues,
  )

  const close = () => {
    navigate('/categories')
  }

  const createNewCategory = (form: CreateCategoryForm) => {
    return createCategoryMutation(form, {
      onSuccess: (data) => handleSuccessCreate(data),
      onError: handleErrorCreate,
    })
  }

  function handleSuccessCreate(data: any) {
    showNotification({
      id: data.id,
      title: 'Успешное создание категории',
      message: `Категория ${data.name} успешно создана`,
    })
    updateCategories()
    close()
  }

  function handleErrorCreate() {
    console.log('error')
  }

  return (
    <Drawer
      opened
      onClose={close}
    >
      <Form
        className="flex h-full flex-col"
        methods={formMethods}
        onSubmit={createNewCategory}
      >
        <Drawer.Header>
          <h2>Create category</h2>
        </Drawer.Header>
        <div className="flex flex-col gap-4 px-4">
          <Form.Field name="slug">
            <Input label="slug" />
          </Form.Field>
          <Form.Field name="name">
            <Input label="name" />
          </Form.Field>
          <Form.Field name="description">
            <TextArea label="description" />
          </Form.Field>
        </div>
        <Drawer.Footer>
          <div className="flex gap-2 px-4 pb-6">
            <Button type="submit">Create</Button>
          </div>
        </Drawer.Footer>
      </Form>
    </Drawer>
  )
}

export default CategoryCreatePage
