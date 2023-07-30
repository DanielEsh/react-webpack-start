import { useForm as useReactHookForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function useForm(formSchema: any, defaultValues?: any) {
  return useReactHookForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues,
  })
}
