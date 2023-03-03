import { mkdir, writeFile } from 'fs'
import { resolveRoot } from '../resolveRoot.mjs'
import { schemaTypeTemplate } from './schemaTypeTemplate.mjs'

export const createModel = async (layer, sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'model', ...segments)

  const createModelStructure = async () => {
    try {
      await mkdir(resolveModelPath(), (err) => console.log('ERROR', err))
      await mkdir(resolveModelPath('types'), (err) => console.log('ERROR', err))
      await mkdir(resolveModelPath('slices'), (err) =>
        console.log('ERROR', err),
      )
      await mkdir(resolveModelPath('selectors'), (err) =>
        console.log('ERROR', err),
      )
      await mkdir(resolveModelPath('services'), (err) =>
        console.log('ERROR', err),
      )
    } catch (e) {
      console.log(`Не удалось создать model сегмент для слайса ${sliceName}`, e)
    }
  }

  const createSchemaType = async () => {
    try {
      await writeFile(
        resolveModelPath('types', `${sliceName}Schema.ts`),
        schemaTypeTemplate(sliceName),
        (err) => console.log('ERROR', err),
      )
    } catch (e) {
      console.log('Не удалось создать тип схемы стейта', e)
    }
  }

  await createModelStructure()
  await createSchemaType()
}
