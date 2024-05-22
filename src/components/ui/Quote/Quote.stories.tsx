import type { Meta, StoryObj } from '@storybook/react'
import Quote from './Quote'

const meta: Meta<typeof Quote> = {
  title: 'UI/Quote',
  component: Quote,
  tags: ['autodocs'],
  args: {
    children: 'A quote of something insightful, usefull, magical even.',
    image: 'https://mighty.tools/mockmind-api/content/human/65.jpg',
    name: 'John Schmidt',
    heading: 'Author of the proletarian handbook',
    subHeading: 'Also works in finance',
  },
}
export default meta

type Story = StoryObj<typeof Quote>

export const Primary: Story = {}
