import {defineField, defineType} from 'sanity'

const linkField = defineType({
  name: 'linkField',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'opensInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})

const heroPill = defineType({
  name: 'heroPill',
  title: 'Hero Pill',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

const benefitCard = defineType({
  name: 'benefitCard',
  title: 'Benefit Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
})

const lifestyleMoment = defineType({
  name: 'lifestyleMoment',
  title: 'Lifestyle Moment',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Image Label',
      type: 'string',
      description: 'Short label shown around the lifestyle image, for example Work, Move, Connect, Nightlife.',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})

const stockist = defineType({
  name: 'stockist',
  title: 'Stockist',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Retailer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  preview: {
    select: {
      title: 'brandName',
      subtitle: 'brandSubtitle',
    },
  },
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

const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  preview: {
    select: {
      title: 'pageTitle',
      subtitle: 'heroHeadline',
    },
  },
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Internal Page Title',
      type: 'string',
      initialValue: 'Homepage',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'PREMIUM WELLNESS DRINK',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Refresh different.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'text',
      rows: 3,
      initialValue:
        'A bold caffeine-free wellness drink crafted with Korean red ginseng, botanicals and vitamins to elevate how you feel every day.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroPills',
      title: 'Hero Pills',
      type: 'array',
      of: [{type: 'heroPill'}],
      initialValue: [
        {text: 'No Caffeine'},
        {text: 'No Refined Sugar'},
        {text: 'Lightly Carbonated'},
      ],
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'linkField',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'linkField',
    }),
    defineField({
      name: 'findLinkLabel',
      title: 'Find Link Label',
      type: 'string',
      initialValue: 'Find EVIRON near you',
    }),

    defineField({
      name: 'brandSectionEyebrow',
      title: 'Brand Section Eyebrow',
      type: 'string',
      initialValue: 'REFRESH DIFFERENT',
    }),
    defineField({
      name: 'brandSectionHeadline',
      title: 'Brand Section Headline',
      type: 'string',
      initialValue: 'A new way to refresh.',
    }),
    defineField({
      name: 'brandSectionText',
      title: 'Brand Section Text',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'lifestyleEyebrow',
      title: 'Lifestyle Section Eyebrow',
      type: 'string',
      initialValue: 'LIFESTYLE MOMENTS',
    }),
    defineField({
      name: 'lifestyleHeadline',
      title: 'Lifestyle Section Headline',
      type: 'string',
      initialValue: 'Made for every kind of day.',
    }),
    defineField({
      name: 'lifestyleText',
      title: 'Lifestyle Section Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'lifestyleMoments',
      title: 'Lifestyle Moments',
      type: 'array',
      of: [{type: 'lifestyleMoment'}],
      initialValue: [
        {
          label: 'Work',
          title: 'Desk-ready refreshment',
          description: 'A light lift for busy workdays and focused routines.',
        },
        {
          label: 'Move',
          title: 'For active moments',
          description: 'Refreshing for gym days, walks, movement and reset moments.',
        },
        {
          label: 'Connect',
          title: 'Social and shareable',
          description: 'Made for relaxed catch-ups, meals and everyday connection.',
        },
        {
          label: 'Nightlife',
          title: 'Evening energy, without caffeine',
          description: 'A stylish caffeine-free choice for nights out and social occasions.',
        },
      ],
    }),

    defineField({
      name: 'benefitsEyebrow',
      title: 'Benefits Section Eyebrow',
      type: 'string',
      initialValue: 'BENEFITS',
    }),
    defineField({
      name: 'benefitsHeadline',
      title: 'Benefits Section Headline',
      type: 'string',
      initialValue: 'Wellness in every sip.',
    }),
    defineField({
      name: 'benefitsText',
      title: 'Benefits Section Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'benefits',
      title: 'Benefit Cards',
      type: 'array',
      of: [{type: 'benefitCard'}],
      initialValue: [
        {
          title: 'Caffeine-Free',
          description: 'Refreshment without relying on caffeine.',
        },
        {
          title: 'No Refined Sugar',
          description: 'A lighter choice for health-conscious routines.',
        },
        {
          title: 'Korean Red Ginseng',
          description: 'Crafted with a recognised botanical ingredient.',
        },
        {
          title: 'Botanicals & Vitamins',
          description: 'A functional blend made for everyday refreshment.',
        },
        {
          title: 'Lightly Carbonated',
          description: 'Crisp, sparkling and easy to drink.',
        },
        {
          title: 'Social Occasion Friendly',
          description: 'A smart non-alcoholic option for parties and gatherings.',
        },
      ],
    }),

    defineField({
      name: 'whereToBuyEyebrow',
      title: 'Where to Buy Eyebrow',
      type: 'string',
      initialValue: 'WHERE TO BUY',
    }),
    defineField({
      name: 'whereToBuyHeadline',
      title: 'Where to Buy Headline',
      type: 'string',
      initialValue: 'Find EVIRON across the UAE.',
    }),
    defineField({
      name: 'whereToBuyText',
      title: 'Where to Buy Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'stockists',
      title: 'Stockists',
      type: 'array',
      of: [{type: 'stockist'}],
      initialValue: [
        {name: 'Union Coop', description: 'Available in selected stores'},
        {name: 'Sharjah Coop', description: 'Available in selected stores'},
        {name: 'Blue Mart', description: 'Available in selected stores'},
        {name: 'F Mart', description: 'Available in selected stores'},
        {name: 'Al Maya', description: 'Available in selected stores'},
        {name: 'Dr. Nutrition', description: 'Key retail partner'},
      ],
    }),

    defineField({
      name: 'newsletterEyebrow',
      title: 'Newsletter Eyebrow',
      type: 'string',
      initialValue: 'STAY REFRESHED',
    }),
    defineField({
      name: 'newsletterHeadline',
      title: 'Newsletter Headline',
      type: 'string',
      initialValue: 'Get EVIRON updates.',
    }),
    defineField({
      name: 'newsletterText',
      title: 'Newsletter Text',
      type: 'text',
      rows: 3,
    }),
  ],
})

export const schemaTypes = [
  linkField,
  heroPill,
  benefitCard,
  lifestyleMoment,
  stockist,
  siteSettings,
  homepage,
]