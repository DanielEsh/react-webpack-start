import { firstCharUpperCase } from '../firstCharUpperCase'

export const schemaTypeTemplate = (
  sliceName,
) => `export interface ${firstCharUpperCase(sliceName)}Schema {
    
}`
