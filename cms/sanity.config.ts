
// General
import { defineConfig } from 'sanity'

// Plugins
import { codeInput } from "@sanity/code-input";
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Vanh.art',

  projectId: 'ydhblbds',
  dataset: 'blog-posts',

  plugins: [
    codeInput(),
    deskTool(),
    visionTool()],

  schema: {
    types: schemaTypes,
  },
})
