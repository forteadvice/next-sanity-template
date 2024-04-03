import type { Meta, StoryObj } from '@storybook/react'
import HeroComponent from '.'

const meta: Meta<typeof HeroComponent> = {
  title: 'UI/Accordion',
  component: HeroComponent,
  tags: ['autodocs'],
  args: {},
}
export default meta

type Story = StoryObj<typeof HeroComponent>

export const Hero: Story = {}
