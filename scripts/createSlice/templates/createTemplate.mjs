import { mkdir } from 'fs'
import { resolveRoot } from '../resolveRoot'
import { createModel } from './createModel'
const createUI = require('./createUI')
const createPublicApi = require('./createPublicApi')

export const createTemplate = async (layer, sliceName) => {
  try {
    await mkdir(resolveRoot('src', layer, sliceName))
  } catch (e) {
    console.log(`не удалось создать директорию для слайса${sliceName}`)
  }

  await createModel(layer, sliceName)
  await createUI(layer, sliceName)
  await createPublicApi(layer, sliceName)
}
