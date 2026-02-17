import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'training',
  title: 'Training Courses',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'schedule', title: 'Schedule & Timing' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Course Title',
      type: 'string',
      group: 'content',
      description: 'The main headline for the training course (e.g., Oil and Gas Piping Design)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'content',
      description: 'Short summary shown at the bottom of the banner',
    }),
    defineField({
      name: 'mainImage',
      title: 'Banner Image (Upload)',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
      description: 'Upload an image directly to Sanity.',
    }),
    defineField({
      name: 'mainImageUrl',
      title: 'Banner Image (Cloudinary URL)',
      type: 'url',
      group: 'content',
      description: 'Alternative: Paste a direct Cloudinary link. This will be used if no image is uploaded above.',
    }),
    defineField({
      name: 'startDate',
      title: 'Training Start Date',
      type: 'datetime',
      group: 'schedule',
      description: 'Used for the countdown and "Coming Soon" section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active Status',
      type: 'boolean',
      group: 'schedule',
      initialValue: true,
      description: 'Toggle this to show or hide the course on the frontend',
    }),
    defineField({
      name: 'isComingSoon',
      title: 'Display "Coming Soon" Badge',
      type: 'boolean',
      group: 'schedule',
      initialValue: true,
    }),
    defineField({
      name: 'applyUrl',
      title: 'Application Link',
      type: 'string',
      group: 'content',
      initialValue: '/apply-for-training',
      description: 'Link for the "Apply Now" button (e.g., /apply-for-training)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'startDate',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, date, media } = selection
      return {
        title: title,
        subtitle: date ? `Starts: ${new Date(date).toLocaleDateString()}` : 'No date set',
        media: media,
      }
    },
  },
})
