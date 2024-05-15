import type { Meta, StoryObj } from '@storybook/react'
import TabsComponent from './Tabs'

const meta: Meta<typeof TabsComponent> = {
  title: 'UI/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  args: {
    tabs: [
      {
        label: 'Tab 1',
        headline: 'Tab 1 headline',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam eaque voluptas itaque velit amet. Quos iusto repellendus eum nisi ad, distinctio possimus eos repudiandae saepe esse quidem voluptatem ratione!',
      },

      {
        label: 'Tab 2',
        headline: 'Tab 2 headline',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam eaque voluptas itaque velit amet. Quos iusto repellendus eum nisi ad, distinctio possimus eos repudiandae saepe esse quidem voluptatem ratione!',
      },
    ],
    ariaLabel: 'Tabs component',
  },
}
export default meta

type Story = StoryObj<typeof TabsComponent>

export const Tabs: Story = {}
