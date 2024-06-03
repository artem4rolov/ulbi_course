import type { Meta, StoryObj } from '@storybook/react'
import {
  ThemeProviderDecorator,
  RouterProviderDecorator,
  Theme,
} from 'app/providers'
import { Sidebar } from './sidebar'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  parameters: {
    // layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <RouterProviderDecorator>
          <ThemeProviderDecorator theme={Theme.light}>
            <Story />
          </ThemeProviderDecorator>
        </RouterProviderDecorator>
      )
    },
  ],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
  args: {
    className: '',
  },
}
export const Dark: Story = {
  args: {
    className: '',
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProviderDecorator theme={Theme.dark}>
          <Story />
        </ThemeProviderDecorator>
      )
    },
  ],
}
