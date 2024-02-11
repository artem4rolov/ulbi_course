import type { StorybookConfig } from "@storybook/react-webpack5";
import { cssLoader } from "../build/loaders";
import path from "path";

const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {
            builder: {
                useSWC: true,
            },
        },
    },
    docs: {
        autodocs: "tag",
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic'
                }
            }
        }
    }),
    async webpackFinal(config, { configType }) {
        if (configType === 'DEVELOPMENT') {
        // Modify config for development
            config.module.rules.push(cssLoader(true))
            config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))
        }
        if (configType === 'PRODUCTION') {
        // Modify config for production
        }
        return config;
    },
};
export default config;
