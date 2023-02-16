
import {defineConfig} from 'sanity'

// TODO: Plugins
import { codeInput } from "@sanity/code-input";
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import { blogData } from './schemas'

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
})
