import webpack from "webpack";

export default function (): webpack.RuleSetRule[] {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
}