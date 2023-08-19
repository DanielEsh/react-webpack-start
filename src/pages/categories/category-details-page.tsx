import { useNavigate, useParams } from 'react-router-dom'
import { z } from 'zod'
import { Drawer } from 'shared/ui-kit/drawer'
import { Form } from 'shared/ui-kit/form'
import { useForm } from 'shared/ui-kit/form/use-form'
import { Button } from 'shared/ui-kit/button'
import { Input, TextArea } from 'shared/ui-kit/form-controls'
import { useGetCategoryDetails } from 'entities/categories/api/queries'
import { useEffect } from 'react'
import { CategoryFormFields } from 'entities/categories/ui/form/category-form-fields'
import { categoryFormSchema } from 'entities/categories/ui/form/category-form-schema'
import { CategoryForm } from 'entities/categories/ui/form/types'

const CategoryDetailsPage = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const { isSuccess, data } = useGetCategoryDetails(slug || '')

  const close = () => {
    navigate('/categories')
  }

  const defaultValues: CategoryForm = {
    slug: data?.slug ?? '',
    name: data?.name ?? '',
  }

  const formMethods = useForm<CategoryForm>(categoryFormSchema, defaultValues)

  const { reset } = formMethods

  useEffect(() => {
    reset(data)
  }, [data])

  const updateCategory = () => {
    console.log('update')
  }

  return (
    isSuccess && (
      <Drawer
        opened
        onClose={close}
      >
        <Form
          className="flex h-full flex-col"
          methods={formMethods}
          onSubmit={updateCategory}
        >
          <Drawer.Header>
            <h2>Update category</h2>
          </Drawer.Header>

          <CategoryFormFields />

          <Drawer.Footer>
            <div className="flex gap-2 px-4 pb-6">
              <Button
                type="submit"
                variant="primary"
              >
                Update
              </Button>
            </div>
          </Drawer.Footer>
        </Form>
      </Drawer>
    )
  )
}

export default CategoryDetailsPage
