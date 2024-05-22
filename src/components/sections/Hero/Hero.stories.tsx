import type { Meta, StoryObj } from '@storybook/react'
import Component from './Hero'
import { baseImageMock } from '@/components/utilities/BaseImage/baseImage.mock'

const meta: Meta<typeof Component> = {
  title: 'Sections/Hero',
  component: Component,
  tags: ['autodocs'],

  args: {
    headline: 'Lorem Ipsum',
    manchet:
      'Lorem ipsum dolor sit amet consectetur. Vel id et est odio lorem morbi viverra integer. Tincidunt ornare phasellus pretium velit. A lectus pulvinar duis sit eget ut. Ultricies in purus nec.',
    image: baseImageMock,
  },
}
export default meta

type Story = StoryObj<typeof Component>

export const Hero: Story = {}
