import type { Meta, StoryObj } from '@storybook/react'
import { Theme, ThemeProviderDecorator } from 'app/providers'
import { AppLink } from './app-link'
import { AppLinkTheme } from './app-link.types'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/App-Link',
  component: AppLink,
  parameters: {
    // layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <ThemeProviderDecorator theme={Theme.light}>
            <Story />
          </ThemeProviderDecorator>
        </BrowserRouter>
      )
    },
  ],
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Primary link',
    theme: AppLinkTheme.PRIMARY,
    to: '',
  },
}
export const PrimaryInverted: Story = {
  args: {
    children: 'Primary link DARK',
    theme: AppLinkTheme.PRIMARY,
    to: '',
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

export const Secondary: Story = {
  args: {
    children: 'Secondary link',
    theme: AppLinkTheme.INVERTED,
    to: '',
  },
}

export const SecondaryInverted: Story = {
  args: {
    children: 'Secondary link INVERTED',
    theme: AppLinkTheme.INVERTED,
    to: '',
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
