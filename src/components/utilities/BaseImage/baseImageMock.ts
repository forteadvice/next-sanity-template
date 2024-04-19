import { TBaseImage } from '@/sanity/queries/fieldQueries/baseImage'

export const baseImageMock = {
  _type: 'baseImage',
  alt: 'Lorem',
  asset: {
    _ref: '_ref',
    metadata: {
      lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAcEBv/EACQQAAEEAgECBwAAAAAAAAAAAAEAAgMEERIhBQYHFCMxQVFh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwAB/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQATAxL/2gAMAwEAAhEDEQA/AI3C9sxZECQ37Pws9iriF8jX7BrsYC7+Xs2tUsxsgsyhsnvs0FOp9nwQyDW1L6nDhqMJHoR5NK3E7FFUD4d0Dz5qfn8CK9lmTf/Z',
      dimensions: {
        height: 2960,
        _type: 'sanity.imageDimensions',
        width: 4440,
        aspectRatio: 1.5,
      },
    },

    url: 'https://cdn.sanity.io/images/qh8dfcdx/production/634a343d02f0b7afe8a9eee1d88da64e31c42c08-4440x2960.jpg',
    _type: 'sanity.imageAsset',
  },
} satisfies TBaseImage
