import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import alias from "@rollup/plugin-alias";
import path from "path";
import { fileURLToPath } from "url";
import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('rollup').RollupOptions[]} */
const config = [
	{
		input: "src/index.ts",
		output: {
			file: "dist/index.js",
			format: "esm",
			sourcemap: true,
		},
		external: [
			"react",
			"react-dom",
			"styled-components",
			/\.css$/,
			"fs",
			"path",
			"crypto",
			"stream",
			"assert",
			"tty",
		],
		plugins: [
			json(),
			peerDepsExternal(),
			nodePolyfills(),
			resolve({
				extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"],
				browser: true,
				preferBuiltins: false,
			}),
			commonjs({ defaultIsModuleExports: true }),
			typescript({ tsconfig: "./tsconfig.json" }),
			babel({
				babelHelpers: "bundled",
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				exclude: /node_modules/,
			}),
			postcss({ modules: true }),
			alias({
				entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
			}),
		],
	},
	{
		input: "dist/types/index.d.ts",
		output: { file: "dist/index.d.ts", format: "es" },
		plugins: [dts()],
	},
];

export default config;
