import {defineField, defineType} from 'sanity'

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      initialValue: 'EVIRON',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brandSubtitle',
      title: 'Brand Subtitle',
      type: 'string',
      initialValue: 'WELLNESS DRINK',
    }),
    defineField({
      name: 'buyButtonLabel',
      title: 'Buy Button Label',
      type: 'string',
      initialValue: 'Buy EVIRON',
    }),
    defineField({
      name: 'amazonUrl',
      title: 'Amazon URL',
      type: 'url',
    }),
    defineField({
      name: 'noonUrl',
      title: 'noon URL',
      type: 'url',
    }),
    defineField({
      name: 'generalEmail',
      title: 'General Enquiries Email',
      type: 'email',
      initialValue: 'customers@evirondrink.ae',
    }),
    defineField({
      name: 'businessEmail',
      title: 'Business / Distributor Email',
      type: 'email',
      initialValue: 'business@evirondrink.ae',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '+971 58 597 5949',
    }),
    defineField({
      name: 'whatsappUrl',
      title: 'WhatsApp URL',
      type: 'url',
      initialValue: 'https://wa.me/971562603395',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      initialValue: 'B2B Tower, Office 915\nBusiness Bay, Dubai\nUnited Arab Emirates',
    }),
    defineField({
      name: 'clarionFooterText',
      title: 'Clarion Footer Text',
      type: 'text',
      rows: 3,
      initialValue: 'A Clarion International brand\nProduced for Clarion International Trading LLC, Dubai, UAE',
    }),
    defineField({
      name: 'clarionWebsite',
      title: 'Clarion Website',
      type: 'url',
      initialValue: 'https://clarioninternational.ae/',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'snapchatUrl',
      title: 'Snapchat URL',
      type: 'url',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2026 EVIRON Wellness Drink. All rights reserved.',
    }),
  ],
})

export const schemaTypes = [siteSettings]