import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'trainingSettings',
  title: 'Training Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerTitle',
      title: 'Banner Headline',
      type: 'string',
      initialValue: 'Upcoming Training Programs',
      description: 'The main title for the training section',
    }),
    defineField({
      name: 'bannerDescription',
      title: 'Banner Description',
      type: 'text',
      initialValue: 'Advance your career with our industry-leading technical training courses.',
      description: 'The supplementary text for the training section',
    }),
    defineField({
      name: 'layoutColumns',
      title: 'Layout Columns (Desktop)',
      description: '1 for featured banner, 2 for split, 3 for grid view',
      type: 'number',
      initialValue: 1,
      options: {
        list: [
          { title: 'Full Width (Hero)', value: 1 },
          { title: 'Two Columns', value: 2 },
          { title: 'Three Columns (Grid)', value: 3 },
        ],
      },
    }),
  ],
})
