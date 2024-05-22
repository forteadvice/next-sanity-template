import type { Meta, StoryObj } from '@storybook/react'
import HeadingComponent from './Heading'

const meta: Meta<typeof HeadingComponent> = {
  title: 'Ui/Heading',
  component: HeadingComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    children: 'Lorem Ipsum Dolor',
    tag: 'h1',
  },
}
export default meta

type Story = StoryObj<typeof HeadingComponent>

export const Title: Story = {
  args: { variant: 'title' },
}

export const ExtraLarge: Story = {
  args: { variant: 'extra-large' },
}

export const Large: Story = {
  args: { variant: 'large' },
}

export const Medium: Story = {
  args: { variant: 'medium' },
}

export const Small: Story = {
  args: { variant: 'small' },
}

export const ExtraSmall: Story = {
  args: { variant: 'extra-small' },
}
