import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import {cssLoader}  from '../build/loaders/css-loader';
import { PathsType } from '../build/types';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: PathsType = {
        entry:'',
        output: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config?.resolve?.modules?.push(paths.src);
    config?.resolve?.extensions?.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config?.module?.rules?.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config?.module?.rules?.push(cssLoader(true));

    return config;
};
