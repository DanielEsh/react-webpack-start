import { useNavigate } from 'react-router-dom'
import { Drawer } from 'shared/ui-kit/drawer'
import { useForm } from 'shared/ui-kit/form/use-form'
import { Form } from 'shared/ui-kit/form/form'
import { Button } from 'shared/ui-kit/button'
import {
  useCreateCategoryMutation,
  useUpdateCategories,
} from 'entities/categories/api/queries'
import { useNotification } from 'shared/notification'
import { CategoryFormFields } from 'entities/categories/ui/form/category-form-fields'
import { categoryFormSchema } from 'entities/categories/ui/form/category-form-schema'
import { CategoryForm } from 'entities/categories/ui/form/types'

const CategoryCreatePage = () => {
  const navigate = useNavigate()
  const { mutate: createCategoryMutation } = useCreateCategoryMutation()
  const { updateCategories } = useUpdateCategories()
  const { showNotification } = useNotification()

  const defaultValues: CategoryForm = {
    slug: '',
    name: '',
  }

  const formMethods = useForm<CategoryForm>(categoryFormSchema, defaultValues)

  const close = () => {
    navigate('/categories')
  }

  const createNewCategory = (form: CategoryForm) => {
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

        <CategoryFormFields />

        <Drawer.Footer>
          <div className="flex gap-2 px-4 pb-6">
            <Button
              type="submit"
              variant="primary"
            >
              Create
            </Button>
          </div>
        </Drawer.Footer>
      </Form>
    </Drawer>
  )
}

export default CategoryCreatePage
