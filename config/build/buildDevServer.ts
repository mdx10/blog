import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export default function ({ port }: BuildOptions): DevServerConfiguration {
    return {
        port,
        open: true,
    }
}