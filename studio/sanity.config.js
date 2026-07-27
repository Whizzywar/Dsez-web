import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'dsez-cms',

  projectId: '4keuk6ac',
  dataset: 'p1roduction',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
