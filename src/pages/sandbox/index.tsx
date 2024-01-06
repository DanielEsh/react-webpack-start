import { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'

export const SandBoxPage = lazy(() => import('./sandbox-page'))
export const SandBoxPageIcons = lazy(() => import('./sandbox-icons-page'))
