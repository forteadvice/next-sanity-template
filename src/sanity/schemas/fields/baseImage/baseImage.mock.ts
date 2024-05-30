import { TBaseImage } from '@/sanity/schemas/fields/baseImage/baseImage.props'

/** Tree landscape */
export const baseImageMock1 = {
  _type: 'baseImage',
  alt: 'Lorem',
  asset: {
    _ref: '_ref',
    metadata: {
      lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUHBv/EACIQAAIBBAIBBQAAAAAAAAAAAAECAwAEBREGEjETIjJRYf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EAB0RAAICAQUAAAAAAAAAAAAAAAECAAMEESEiQVH/2gAMAwEAAhEDEQA/AFnDcniMtApv7MwQSHfdBsA/taG+XieOHqmRxMT7euvFSjhpkmw/RpXCKCeoOgT90rkme8uyk7FgEbWz41TXnqvEg7TCzFLHWU+95VgI5yscSuoHybW6KiMdobkGR5pASfAopOYg6lClvZ//2Q==',
      dimensions: {
        _type: 'sanity.imageDimensions',
        width: 5760,
        aspectRatio: 1.5,
        height: 3840,
      },
    },
    url: 'https://cdn.sanity.io/images/sjfhd0gk/production/26f90a981cfa2abd931143bc5ddf42960a3e4ad9-5760x3840.jpg',
    _type: 'sanity.imageAsset',
  },
  crop: {
    _type: 'sanity.imageCrop',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
  },
  hotspot: {
    _type: 'sanity.imageHotspot',
    width: 0.39433643915881855,
    x: 0.2508308724181291,
    y: 0.5468105049546024,
    height: 0.5355098818049646,
  },
} satisfies TBaseImage

/** Road in nowhere */
export const baseImageMock2 = {
  _type: 'baseImage',
  alt: 'Lorem',
  asset: {
    _ref: '_ref',
    metadata: {
      lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAYFBwECCP/EACYQAAIBAwQBAwUAAAAAAAAAAAECAwAEBgUREiExEyJBByNhcYH/xAAYAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EAB4RAAICAgIDAAAAAAAAAAAAAAABAhEDIhIhE1Fh/9oADAMBAAIRAxEAPwDoBVVBu2wpEzHKY4Z2srORkKn3yKdj/DVU2f1e1OSCS2v3EjOuwcdEVETZVI8b+pwZfO703HUtrJ80pR1osqTK9W5fa1CZk26IAoqlpsgKyHjMyjzsG6orevwVc/TGrRsNiVYhfCJuLbkr2T+KmMmxrTtSsxFbRrbSJ4ZR5/da2t+wT57rMuokzABSPb3Uigl0dBzb7Yi3WCXbTHhPEV+O6KbJrxvUPVFHggeRn//Z',
      dimensions: {
        _type: 'sanity.imageDimensions',
        width: 3072,
        aspectRatio: 0.6666666666666666,
        height: 4608,
      },
    },
    url: 'https://cdn.sanity.io/images/sjfhd0gk/production/1281b385ce2ffc0281ddec0e0625524f9b28e8d7-3072x4608.jpg',
    _type: 'sanity.imageAsset',
  },
  crop: {
    _type: 'sanity.imageCrop',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
  },
  hotspot: {
    _type: 'sanity.imageHotspot',
    width: 0.6405783260569851,
    x: 0.5115544936236209,
    y: 0.5686649304558249,
    height: 0.2597894134521483,
  },
} satisfies TBaseImage

/** Snow mountains */
export const baseImageMock3 = {
  _type: 'baseImage',
  alt: 'Lorem',
  asset: {
    _ref: '_ref',
    metadata: {
      lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEBQb/xAAhEAACAQQCAgMAAAAAAAAAAAABAgMABAURBhITISMxYf/EABYBAQEBAAAAAAAAAAAAAAAAAAIEBf/EABwRAAICAgMAAAAAAAAAAAAAAAACAQUEQUJRUv/aAAwDAQACEQMRAD8A4o8YupAxhhdwv2VG9VJFiPl6Oyht60TSsfz/ADi2bQxTJGhGj1X2abx92vyfOQxJLEkbJNVTZL5MRaVtuaCcfJXY9j8oqC4zN/YTNBbTBYgdgdd0U4zl6DNO0cj/2Q==',
      dimensions: {
        _type: 'sanity.imageDimensions',
        width: 4442,
        aspectRatio: 1.5001688618709896,
        height: 2961,
      },
    },
    url: 'https://cdn.sanity.io/images/sjfhd0gk/production/26533f414d8247b22e02e7c115eb0b3ad756e061-4442x2961.jpg',
    _type: 'sanity.imageAsset',
  },
  crop: {
    _type: 'sanity.imageCrop',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
  },
  hotspot: {
    x: 0.49959867294520544,
    y: 0.5311248790595497,
    height: 0.4158863486774449,
    _type: 'sanity.imageHotspot',
    width: 0.4721943058379708,
  },
} satisfies TBaseImage
