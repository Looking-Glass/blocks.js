import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
	overwrite: true,
	schema: ["https://blocks.glass/api/graphql"],
	documents: "src/**/!(*.d).{ts,tsx,graphql}",
	generates: {
		"src/graphql/gql/types.ts": {
			plugins: ["typescript", "typescript-operations", "typed-document-node", "typescript-resolvers"],
		},
	},
}

export default config
