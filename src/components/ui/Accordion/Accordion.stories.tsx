import type { Meta, StoryObj } from '@storybook/react'
import Accordion from '.'

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
  args: {
    summary: 'Lorem ipsum dolor',
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique rem vel, sapiente aut labore architecto praesentium, soluta voluptatum ex numquam maxime laborum quae? Velit nemo ipsum, repellendus nisi et nesciunt.',
  },
}
