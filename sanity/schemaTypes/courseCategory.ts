import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'courseCategory',
  title: 'Full Course Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color (Optional)',
      type: 'string',
      description: 'Tailwind class e.g., bg-blue-50/30, bg-orange-50/30',
    }),
    defineField({
      name: 'courses',
      title: 'Courses List',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
