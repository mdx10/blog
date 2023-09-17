import { BuildOptions } from '../types/config';
import babelRemovePropsPlagin from '../../babel/babelRemovePropsPlagin';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}
export function buildBabelLoader({ isTsx, isDev }: BuildBabelLoaderProps) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx && !isDev && [
                        babelRemovePropsPlagin,
                        {
                            props: ['data-testid'],
                        },
                    ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
