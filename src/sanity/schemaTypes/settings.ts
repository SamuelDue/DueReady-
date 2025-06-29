import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Company Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'Default CTA Text',
      type: 'string',
      initialValue: 'Book Your Free Readiness Assessment',
    }),
    defineField({
      name: 'tagline',
      title: 'Company Tagline',
      type: 'string',
      initialValue: 'The fastest way to become fundable, acquirable and compliant',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}) 