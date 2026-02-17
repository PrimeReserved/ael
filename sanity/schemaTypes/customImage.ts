import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'customImage',
  title: 'Custom Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Upload Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => !!parent?.cloudinaryUrl, // Hide if Cloudinary URL is present (optional, but good UX)
    }),
    defineField({
      name: 'cloudinaryUrl',
      title: 'Cloudinary URL',
      type: 'url',
      description: 'Paste a Cloudinary URL here if not uploading an image directly.',
    }),
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'alt', 
      imageUrl: 'cloudinaryUrl',
      imageAsset: 'image.asset',
    },
    prepare({ title, imageUrl, imageAsset }) {
      return {
        title: title || 'Image',
        media: imageAsset || (imageUrl ? { src: imageUrl } : undefined),
      }
    }
  }
})
