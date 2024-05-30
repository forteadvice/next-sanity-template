import type { Meta, StoryObj } from '@storybook/react'
import CallToAction from './CallToAction'
import imageFile from './image.jpg'
import videoFile from './video.mp4'

import Button from '../Button/Button'

const meta: Meta<typeof CallToAction> = {
  title: 'UI/CallToAction',
  component: CallToAction,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    image: imageFile.src,
    video: videoFile,
    heading: "I'm a bold heading",
    subHeading: 'Sub sub what up',
    button: <Button href='#'>Click here</Button>,
    body: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A magni placeat velit impedit qui
        expedita beatae consequatur!
        <br />
        Perferendis natus sit nostrum, porro deleniti sequi cupiditate eaque veritatis
        exercitationem ipsum dolorem.
      </p>
    ),
  },
}
export default meta

type Story = StoryObj<typeof CallToAction>

export const Primary: Story = {}
