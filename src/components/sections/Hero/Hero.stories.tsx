import type { Meta, StoryObj } from '@storybook/react'
import Component from '.'
import { baseImageMock } from '@/components/utilities/BaseImage/baseImageMock'

const meta: Meta<typeof Component> = {
  title: 'UI/Hero',
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
