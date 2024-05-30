import type { Meta, StoryObj } from '@storybook/react'
import InlineLinkComponent from './InlineLink'

const meta: Meta<typeof InlineLinkComponent> = {
  title: 'Ui/Inline Link',
  component: InlineLinkComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof InlineLinkComponent>

export const Default: Story = {
  args: {
    href: '#',
    children: 'Lorem Ipsum',
  },
}
