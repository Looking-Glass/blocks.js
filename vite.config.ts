import { defineConfig } from "vite"
import typescript from "@rollup/plugin-typescript"
import path from "path"
import { typescriptPaths } from "rollup-plugin-typescript-paths"

export default defineConfig({
	plugins: [],
	resolve: {
		alias: [
			{
				find: "~",
				replacement: path.resolve(__dirname, "./src"),
			},
		],
	},
	server: {
		port: 4004,
	},
	build: {
		manifest: true,
		minify: false,
		reportCompressedSize: true,
		lib: {
			entry: path.resolve(__dirname, "./src/main.ts"),
			name: "@lookingglass/blocks.js",
			fileName: "looking-glass-blocks",
			// formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: (id) => !id.startsWith(".") && !path.isAbsolute(id),
			output: {
				globals: {
					"@auth0/auth0-spa-js": "@auth0/auth0-spa-js",
					graphql: "graphql",
					"graphql-request": "graphql-request",
					"node-fetch": "node-fetch",
				},
			},
			plugins: [
				typescriptPaths({
					preserveExtensions: true,
				}),
				typescript({
					sourceMap: false,
					declaration: true,
					outDir: "dist",
				}),
			],
		},
	},
})
