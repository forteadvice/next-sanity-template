import type { Meta, StoryObj } from '@storybook/react'
import TextSectionComponent from './TextSection'
import { portableTextMock } from '@/sanity/schemas/fields/portableText/portableText.mock'

const meta: Meta<typeof TextSectionComponent> = {
  title: 'Sections/TextSection',
  component: TextSectionComponent,
  tags: ['autodocs'],
  args: {
    title: 'Lorem Ipsum',
    text: portableTextMock,
    ctaLink: {
      href: '#',
      title: 'Lorem',
    },
  },
}
export default meta

type Story = StoryObj<typeof TextSectionComponent>

export const Primary: Story = {}
