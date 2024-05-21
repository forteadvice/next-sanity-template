import type { Meta, StoryObj } from '@storybook/react'
import CarouselComponent from './Carousel'

const meta: Meta<typeof CarouselComponent> = {
  title: 'UI/Carousel',
  component: CarouselComponent,
  tags: ['autodocs'],
  args: {
    ariaLabel: 'Carousel component',
    slides: [
      {
        imgSrc:
          'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: {
          href: '#',
          title: 'Read more',
        },
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: {
          href: '#',
          title: 'Read more',
        },
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: {
          href: '#',
          title: 'Read more',
        },
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: {
          href: '#',
          title: 'Read more',
        },
      },
    ],
  },
}
export default meta

type Story = StoryObj<typeof CarouselComponent>

export const Carousel: Story = {}
