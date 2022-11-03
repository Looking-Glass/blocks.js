/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "query FindHologram($id: String!) {\n  hologramFindById(id: $id) {\n    id\n    title\n    aspectRatio\n    quiltCols\n    quiltRows\n    quiltTileCount\n    sourceImages {\n      id\n      url\n      width\n      height\n      type\n      fileSize\n    }\n  }\n}": types.FindHologramDocument,
    "query MyHolograms($first: Int = 20) {\n  me {\n    username\n    holograms(first: $first) {\n      nodes {\n        id\n        title\n        aspectRatio\n        quiltCols\n        quiltRows\n        quiltTileCount\n        sourceImages {\n          id\n          url\n          width\n          height\n          type\n          fileSize\n        }\n      }\n    }\n  }\n}": types.MyHologramsDocument,
};

export function graphql(source: "query FindHologram($id: String!) {\n  hologramFindById(id: $id) {\n    id\n    title\n    aspectRatio\n    quiltCols\n    quiltRows\n    quiltTileCount\n    sourceImages {\n      id\n      url\n      width\n      height\n      type\n      fileSize\n    }\n  }\n}"): (typeof documents)["query FindHologram($id: String!) {\n  hologramFindById(id: $id) {\n    id\n    title\n    aspectRatio\n    quiltCols\n    quiltRows\n    quiltTileCount\n    sourceImages {\n      id\n      url\n      width\n      height\n      type\n      fileSize\n    }\n  }\n}"];
export function graphql(source: "query MyHolograms($first: Int = 20) {\n  me {\n    username\n    holograms(first: $first) {\n      nodes {\n        id\n        title\n        aspectRatio\n        quiltCols\n        quiltRows\n        quiltTileCount\n        sourceImages {\n          id\n          url\n          width\n          height\n          type\n          fileSize\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query MyHolograms($first: Int = 20) {\n  me {\n    username\n    holograms(first: $first) {\n      nodes {\n        id\n        title\n        aspectRatio\n        quiltCols\n        quiltRows\n        quiltTileCount\n        sourceImages {\n          id\n          url\n          width\n          height\n          type\n          fileSize\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;