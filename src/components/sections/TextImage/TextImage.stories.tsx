import type { Meta, StoryObj } from '@storybook/react'
import TextImageComponent from './TextImage'
import { baseImageMock1 } from '@/sanity/schemas/fields/baseImage/baseImage.mock'
import { portableTextMock } from '@/sanity/schemas/fields/portableText/portableText.mock'

const meta: Meta<typeof TextImageComponent> = {
  title: 'Sections/TextImage',
  component: TextImageComponent,
  tags: ['autodocs'],
  args: {
    image: baseImageMock1,
    textSection: {
      title: 'Lorem Ipsum',
      text: portableTextMock,
      ctaLink: {
        href: '#',
        title: 'Lorem',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof TextImageComponent>

export const TextImage: Story = {
  args: {
    layout: 'textImage',
  },
}

export const ImageText: Story = {
  args: {
    layout: 'imageText',
  },
}
