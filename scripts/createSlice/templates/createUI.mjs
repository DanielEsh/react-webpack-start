import { mkdir, writeFile } from 'fs'
import { resolveRoot } from '../resolveRoot.mjs'
import { firstCharUpperCase } from '../firstCharUpperCase.mjs'
import { componentTemplate } from './componentTemplate.mjs'

export const createUI = async (layer, sliceName) => {
  const resolveUIPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'ui', ...segments)

  const createUIDir = async () => {
    try {
      await mkdir(resolveUIPath(), (err) => console.log('ERROR', err))
    } catch (e) {
      console.log('Не удалось создать UI директорию')
    }
  }

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName)
      await mkdir(resolveUIPath(componentName), (err) =>
        console.log('ERROR', err),
      )
      await writeFile(
        resolveUIPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName),
        (err) => console.log('ERROR', err),
      )
    } catch (e) {
      console.log('Не удалось создать компонент')
    }
  }

  await createUIDir()
  await createComponent()
}