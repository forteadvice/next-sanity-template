import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Button>

export const PrimaryButton: Story = {
  args: {
    children: 'Click Here',
  },
}

export const PrimaryAnchor: Story = {
  args: {
    children: 'Click Here',
    href: '/',
  },
}
