import { mkdir, writeFile } from 'fs'
import { resolveRoot } from '../resolveRoot'
import { firstCharUpperCase } from '../firstCharUpperCase'
const componentTemplate = require('./componentTemplate')
const storyTemplate = require('./storyTemplate')
const styleTemplate = require('./styleTemplate')

export const createUI = async (layer, sliceName) => {
  const resolveUIPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'ui', ...segments)

  const createUIDir = async () => {
    try {
      await mkdir(resolveUIPath())
    } catch (e) {
      console.log('Не удалось создать UI директорию')
    }
  }

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName)
      await mkdir(resolveUIPath(componentName))
      await writeFile(
        resolveUIPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName),
      )
      await writeFile(
        resolveUIPath(componentName, `${componentName}.stories.tsx`),
        storyTemplate(layer, componentName),
      )
      await writeFile(
        resolveUIPath(componentName, `${componentName}.module.scss`),
        styleTemplate(componentName),
      )
    } catch (e) {
      console.log('Не удалось создать компонент')
    }
  }

  await createUIDir()
  await createComponent()
}
