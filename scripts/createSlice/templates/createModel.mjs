import { mkdir, writeFile } from 'fs'
import { resolveRoot } from '../resolveRoot.mjs'
import { schemaTypeTemplate } from './schemaTypeTemplate.mjs'

export const createModel = async (layer, sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'model', ...segments)

  const createModelStructure = async () => {
    try {
      await mkdir(resolveModelPath())
      await mkdir(resolveModelPath('types'))
      await mkdir(resolveModelPath('slices'))
      await mkdir(resolveModelPath('selectors'))
      await mkdir(resolveModelPath('services'))
    } catch (e) {
      console.log(`Не удалось создать model сегмент для слайса ${sliceName}`, e)
    }
  }

  const createSchemaType = async () => {
    try {
      await writeFile(
        resolveModelPath('types', `${sliceName}Schema.ts`),
        schemaTypeTemplate(sliceName),
      )
    } catch (e) {
      console.log('Не удалось создать тип схемы стейта', e)
    }
  }

  await createModelStructure()
  await createSchemaType()
}
