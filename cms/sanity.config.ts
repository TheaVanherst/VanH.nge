
// TODO: Plugins
import { codeInput } from "@sanity/code-input";
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import { blogData } from './schemas'

const config = {
  name: 'default',
  title: 'Vanh.art',

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [
    codeInput(),
    deskTool(),
    visionTool()
  ],
  schema: {
    types: blogData
  },

}

export default config;