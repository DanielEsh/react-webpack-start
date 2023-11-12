import { writeFile } from 'fs'
import { resolveRoot } from '../resolveRoot.mjs'
import { firstCharUpperCase } from '../firstCharUpperCase.mjs'
import { errorCb } from '../error.mjs'

export const createPublicApi = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName)
  const schemaName = `${sliceName}Schema`

  try {
    await writeFile(
      resolveRoot('src', layer, sliceName, 'index.tsx'),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${firstCharUpperCase(
        schemaName,
      )} } from './model/types/${schemaName}';`,
      errorCb,
    )
  } catch (e) {
    console.log('Не удалось создать PUBLIC API')
  }
}
