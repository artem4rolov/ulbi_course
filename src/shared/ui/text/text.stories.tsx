import type { Meta, StoryObj } from '@storybook/react'
import { Theme, ThemeProviderDecorator } from 'app/providers'
import { Text } from './text'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Button',
  component: Text,
  parameters: {
    // layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProviderDecorator theme={Theme.light}>
          <Story />
        </ThemeProviderDecorator>
      )
    },
  ],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TitleAndText: Story = {
  args: {
    title: 'Title example',
    text: 'Text example',
  },
}
export const OnlyTitle: Story = {
  args: {
    title: 'Title example',
  },
}
export const OnlyText: Story = {
  args: {
    text: 'Text example',
  },
}
