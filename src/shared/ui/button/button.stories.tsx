import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { ButtonSize, ButtonTheme } from './button.types'
import { Theme, ThemeProviderDecorator } from 'app/providers'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Button',
  component: Button,
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid: Story = {
  args: {
    children: 'Solid',
    theme: ButtonTheme.SOLID,
  },
}
export const SolidM: Story = {
  args: {
    children: 'Solid',
    theme: ButtonTheme.SOLID,
    size: ButtonSize.BUTTON_SIZE_M,
  },
}
export const SolidL: Story = {
  args: {
    children: 'Solid',
    theme: ButtonTheme.SOLID,
    size: ButtonSize.BUTTON_SIZE_L,
  },
}
export const SolidXL: Story = {
  args: {
    children: 'Solid',
    theme: ButtonTheme.SOLID,
    size: ButtonSize.BUTTON_SIZE_XL,
  },
}
export const SolidDark: Story = {
  args: {
    children: 'Solid',
    theme: ButtonTheme.SOLID,
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

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE,
  },
}

export const OutlineDark: Story = {
  args: {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE,
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

export const Link: Story = {
  args: {
    children: 'Link',
    theme: ButtonTheme.LINK,
  },
}

export const LinkDark: Story = {
  args: {
    children: 'Link',
    theme: ButtonTheme.LINK,
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
