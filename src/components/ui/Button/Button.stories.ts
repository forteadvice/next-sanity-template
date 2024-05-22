import type { Meta, StoryObj } from '@storybook/react'
import ButtonComponent from './Button'

const meta: Meta<typeof ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    children: 'Click Here my Dear',
  },
}
export default meta

type Story = StoryObj<typeof ButtonComponent>

export const PrimaryButton: Story = {}

export const PrimaryAnchor: Story = {
  args: {
    children: 'Click Here',
    href: '/',
  },
}
