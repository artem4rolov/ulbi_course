import type { Meta, StoryObj } from '@storybook/react';
import { Theme, ThemeProviderDecorator } from 'app/providers';
import { PageLoader } from './page-loader';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Widgets/PageLoader',
    component: PageLoader,
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
        }
    ],
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PageLoaderComponent: Story = {
    args: {
        className: ''
    },
};
export const PageLoaderDark: Story = {
    args: {
        className: ''
    },
    decorators: [
        (Story) => {
            return (
                <ThemeProviderDecorator theme={Theme.light}>
                    <Story />
                </ThemeProviderDecorator>
            )
        }
    ],
};




