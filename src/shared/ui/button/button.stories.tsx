import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { ButtonTheme } from './button.types';
import { ThemeProviderDecorator } from 'app/providers';

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
                <ThemeProviderDecorator theme='light'>
                    <Story />
                </ThemeProviderDecorator>
            )
        }
    ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid: Story = {
    args: {
        children: 'Solid',
        theme: ButtonTheme.SOLID
    },
};
export const SolidDark: Story = {
    args: {
        children: 'Solid',
        theme: ButtonTheme.SOLID
    },
    decorators: [
        (Story) => {
            return (
                <ThemeProviderDecorator theme='dark'>
                    <Story />
                </ThemeProviderDecorator>
            )
        }
    ],
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        theme: ButtonTheme.OUTLINE
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Outline',
        theme: ButtonTheme.OUTLINE
    },
    decorators: [
        (Story) => {
            return (
                <ThemeProviderDecorator theme='dark'>
                    <Story />
                </ThemeProviderDecorator>
            )
        }
    ],
};

export const Link: Story = {
    args: {
        children: 'Link',
        theme: ButtonTheme.LINK
    },
};

export const LinkDark: Story = {
    args: {
        children: 'Link',
        theme: ButtonTheme.LINK
    },
    decorators: [
        (Story) => {
            return (
                <ThemeProviderDecorator theme='dark'>
                    <Story />
                </ThemeProviderDecorator>
            )
        }
    ],
};

