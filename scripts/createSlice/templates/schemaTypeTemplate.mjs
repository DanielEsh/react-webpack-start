import { firstCharUpperCase } from '../firstCharUpperCase.mjs'

export const schemaTypeTemplate = (
  sliceName,
) => `export interface ${firstCharUpperCase(sliceName)}Schema {
    
}`
