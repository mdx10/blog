import webpack from "webpack";

export default function (): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}