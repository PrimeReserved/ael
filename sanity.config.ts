import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'g7f6z7l8'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  title: 'AEL | Admin Portal',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('AEL Content Manager')
          .items([
            // Singleton for Settings
            S.listItem()
              .title('Training Settings')
              .id('trainingSettings')
              .child(
                S.document()
                  .schemaType('trainingSettings')
                  .documentId('trainingSettings')
              ),
            S.divider(),
            // Regular document types
            ...S.documentTypeListItems().filter(
              (listItem) => !['trainingSettings'].includes(listItem.getId() as string)
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schema.types,
  },
})
