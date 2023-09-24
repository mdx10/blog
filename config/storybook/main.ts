import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';

const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
};

const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: /\.module\./,
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
            },
        },
        'sass-loader',
    ],
};

const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
};

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        config!.resolve!.modules!.push(paths.src);
        config!.resolve!.extensions!.push('.ts', '.tsx');
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };
        // eslint-disable-next-line no-param-reassign
        const rules = config.module!.rules as RuleSetRule[];
        // @ts-ignore
        config!.module!.rules = rules.map((rule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
        config!.module!.rules!.push(cssLoader, svgLoader);
        // @ts-ignore
        config.plugins.push(
            new DefinePlugin({
                __API__: JSON.stringify(''),
                __IS_DEV__: true,
            }),
        );

        return config;
    },
};
export default config;
