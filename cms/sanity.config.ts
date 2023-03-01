
import {defineConfig} from 'sanity'

// TODO: Plugins
import { codeInput } from "@sanity/code-input";
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import { blogData } from './schemas'
import path from 'path'

// projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
// dataset: import.meta.env.SANITY_STUDIO_DATASET,

export default defineConfig({
  name: 'Vanh',
  title: 'Vanh.art',

  projectId:  import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [
    codeInput(),
    deskTool(),
    visionTool()
  ],
  schema: {
    types: blogData
  },

  api: {},

  vite: config => {
    if (!config.resolve) config.resolve = {}
    if (!config.resolve.alias) config.resolve.alias = {}

    config.resolve.alias['$components'] = path.resolve('./schemas/components')
    config.resolve.alias['$libs'] =        path.resolve('./schemas/libs')

    return config
  },
})
