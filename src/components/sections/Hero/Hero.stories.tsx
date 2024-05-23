import type { Meta, StoryObj } from '@storybook/react'
import HeroComponent from './Hero'
import { baseImageMock3 } from '@/sanity/schemas/fields/baseImage/baseImage.mock'

const meta: Meta<typeof HeroComponent> = {
  title: 'Sections/Hero',
  component: HeroComponent,
  tags: ['autodocs'],
  args: {
    headline: 'Lorem Ipsum',
    manchet:
      'Lorem ipsum dolor sit amet consectetur. Vel id et est odio lorem morbi viverra integer. Tincidunt ornare phasellus pretium velit. A lectus pulvinar duis sit eget ut. Ultricies in purus nec.',
    image: baseImageMock3,
  },
}
export default meta

type Story = StoryObj<typeof HeroComponent>

export const Hero: Story = {}
