
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://blocks.glass/api/graphql",
  documents: 'src/**/!(*.d).{ts,tsx,graphql}',
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
  },
};

export default config;