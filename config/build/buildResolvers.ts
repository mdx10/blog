import webpack from 'webpack';
import { BuildOptions } from './types/config';

export default function ({ paths }: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        mainFiles: ['index'],
        alias: {},
        modules: [paths.src, 'node_modules'],
    };
}
