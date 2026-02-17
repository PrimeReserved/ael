import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional alternative title for the content section'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'sections',
      title: 'Service Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            { name: 'content', type: 'text', title: 'Section Content' },
            {
              name: 'items',
              type: 'array',
              title: 'Bullet Points',
              of: [{ type: 'string' }]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'equipmentGallery',
      title: 'Equipment Gallery',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Optional gallery of equipment images'
    }),
    defineField({
      name: 'isActive',
      title: 'Active Status',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle this to show or hide the service on the frontend'
    })
  ]
})
