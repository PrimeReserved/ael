import { defineType, defineField } from 'sanity'
import { BookIcon } from '@sanity/icons'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'customImage', // Use our custom image type
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'customImage', // Allow images in body too
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      media: 'mainImage.image', // Default preview prefers uploaded image
      cloudinaryUrl: 'mainImage.cloudinaryUrl'
    },
    prepare({ title, date, media, cloudinaryUrl }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'Draft',
        // If uploaded image exists, use it. Else if cloudinaryUrl exists, try to use it (sanity studio might not render external URL as media easily without a component, but this is best effort)
        media: media || (cloudinaryUrl ? (() => { 
            // Return a simple object, Studio might optimize. 
            // Ideally we'd need a custom preview component for external URLs if we want them to show in the list, 
            // but for now standard media is fine.
            return undefined // Default to icon if external
        })() : undefined)
      }
    },
  },
})
