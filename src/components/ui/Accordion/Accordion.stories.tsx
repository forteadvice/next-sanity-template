import type { Meta, StoryObj } from '@storybook/react'
import AccordionComponent from './Accordion'

const meta: Meta<typeof AccordionComponent> = {
  title: 'UI/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  args: {
    summary: 'Lorem ipsum dolor',
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique rem vel, sapiente aut labore architecto praesentium, soluta voluptatum ex numquam maxime laborum quae? Velit nemo ipsum, repellendus nisi et nesciunt.',
  },
}
export default meta

type Story = StoryObj<typeof AccordionComponent>

export const Primary: Story = {}
