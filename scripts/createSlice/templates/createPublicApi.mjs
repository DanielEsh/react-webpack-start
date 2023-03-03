import { writeFile } from 'fs'
import { resolveRoot } from '../resolveRoot.mjs'
import { firstCharUpperCase } from '../firstCharUpperCase.mjs'

export const createPublicApi = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName)
  const schemaName = `${sliceName}Schema`

  try {
    await writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${firstCharUpperCase(
        schemaName,
      )} } from './model/types/${schemaName}';`,
      (err) => console.log('ERROR', err),
    )
  } catch (e) {
    console.log('Не удалось создать PUBLIC API')
  }
}
