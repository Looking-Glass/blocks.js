import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
declare const documents: {
    "query FindHologram($id: String!) {\n  hologramFindById(id: $id) {\n    id\n    title\n    aspectRatio\n    quiltCols\n    quiltRows\n    quiltTileCount\n    sourceImages {\n      id\n      url\n      width\n      height\n      type\n      fileSize\n    }\n  }\n}": DocumentNode<types.FindHologramQuery, types.Exact<{
        id: string;
    }>>;
    "query MyHolograms($first: Int = 20) {\n  me {\n    username\n    holograms(first: $first) {\n      nodes {\n        id\n        title\n        aspectRatio\n        quiltCols\n        quiltRows\n        quiltTileCount\n        sourceImages {\n          id\n          url\n          width\n          height\n          type\n          fileSize\n        }\n      }\n    }\n  }\n}": DocumentNode<types.MyHologramsQuery, types.Exact<{
        first?: types.InputMaybe<number> | undefined;
    }>>;
};
export declare function graphql(source: "query FindHologram($id: String!) {\n  hologramFindById(id: $id) {\n    id\n    title\n    aspectRatio\n    quiltCols\n    quiltRows\n    quiltTileCount\n    sourceImages {\n      id\n      url\n      width\n      height\n      type\n      fileSize\n    }\n  }\n}"): (typeof documents)["query FindHologram($id: String!) {\n  hologramFindById(id: $id) {\n    id\n    title\n    aspectRatio\n    quiltCols\n    quiltRows\n    quiltTileCount\n    sourceImages {\n      id\n      url\n      width\n      height\n      type\n      fileSize\n    }\n  }\n}"];
export declare function graphql(source: "query MyHolograms($first: Int = 20) {\n  me {\n    username\n    holograms(first: $first) {\n      nodes {\n        id\n        title\n        aspectRatio\n        quiltCols\n        quiltRows\n        quiltTileCount\n        sourceImages {\n          id\n          url\n          width\n          height\n          type\n          fileSize\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query MyHolograms($first: Int = 20) {\n  me {\n    username\n    holograms(first: $first) {\n      nodes {\n        id\n        title\n        aspectRatio\n        quiltCols\n        quiltRows\n        quiltTileCount\n        sourceImages {\n          id\n          url\n          width\n          height\n          type\n          fileSize\n        }\n      }\n    }\n  }\n}"];
export declare function graphql(source: string): unknown;
export declare type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
export {};
