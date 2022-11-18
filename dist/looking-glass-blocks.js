var u = Object.defineProperty;
var o = (e, i, n) => i in e ? u(e, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[i] = n;
var a = (e, i, n) => (o(e, typeof i != "symbol" ? i + "" : i, n), n);
import s from "graphql-request";
var d;
(function(e) {
  e.Quilt = "QUILT", e.Rgbd = "RGBD";
})(d || (d = {}));
var l;
(function(e) {
  e.OnlyMe = "ONLY_ME", e.Password = "PASSWORD", e.Public = "PUBLIC", e.Unlisted = "UNLISTED";
})(l || (l = {}));
var m;
(function(e) {
  e.All = "ALL", e.OnlyMe = "ONLY_ME", e.Password = "PASSWORD", e.Public = "PUBLIC", e.Unlisted = "UNLISTED";
})(m || (m = {}));
var t;
(function(e) {
  e.OnlyMe = "ONLY_ME", e.Public = "PUBLIC", e.Unlisted = "UNLISTED";
})(t || (t = {}));
var k;
(function(e) {
  e.Admin = "ADMIN", e.User = "USER";
})(k || (k = {}));
const v = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "FindHologram" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "id" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "hologramFindById" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "Variable", name: { kind: "Name", value: "id" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "aspectRatio" } }, { kind: "Field", name: { kind: "Name", value: "quiltCols" } }, { kind: "Field", name: { kind: "Name", value: "quiltRows" } }, { kind: "Field", name: { kind: "Name", value: "quiltTileCount" } }, { kind: "Field", name: { kind: "Name", value: "sourceImages" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }, { kind: "Field", name: { kind: "Name", value: "fileSize" } }] } }] } }] } }] }, N = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "FindPlaylist" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "id" } }, type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } }, { kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "lookup" } }, type: { kind: "NamedType", name: { kind: "Name", value: "String" } } }, { kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "first" } }, type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }, defaultValue: { kind: "IntValue", value: "50" } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "playlist" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "Variable", name: { kind: "Name", value: "id" } } }, { kind: "Argument", name: { kind: "Name", value: "lookup" }, value: { kind: "Variable", name: { kind: "Name", value: "lookup" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "description" } }, { kind: "Field", name: { kind: "Name", value: "permalink" } }, { kind: "Field", name: { kind: "Name", value: "privacy" } }, { kind: "Field", name: { kind: "Name", value: "updatedAt" } }, { kind: "Field", name: { kind: "Name", value: "items" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "Variable", name: { kind: "Name", value: "first" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "totalCount" } }, { kind: "Field", name: { kind: "Name", value: "pageInfo" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "hasNextPage" } }, { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } }, { kind: "Field", name: { kind: "Name", value: "startCursor" } }, { kind: "Field", name: { kind: "Name", value: "endCursor" } }] } }, { kind: "Field", name: { kind: "Name", value: "edges" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "node" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "hologramId" } }, { kind: "Field", name: { kind: "Name", value: "position" } }, { kind: "Field", name: { kind: "Name", value: "hologram" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "aspectRatio" } }, { kind: "Field", name: { kind: "Name", value: "quiltCols" } }, { kind: "Field", name: { kind: "Name", value: "quiltRows" } }, { kind: "Field", name: { kind: "Name", value: "quiltTileCount" } }, { kind: "Field", name: { kind: "Name", value: "sourceImages" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }, { kind: "Field", name: { kind: "Name", value: "fileSize" } }] } }] } }] } }] } }] } }, { kind: "Field", name: { kind: "Name", value: "thumbnail" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }] } }] } }] } }] }, r = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "Me" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "me" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "username" } }, { kind: "Field", name: { kind: "Name", value: "displayName" } }, { kind: "Field", name: { kind: "Name", value: "email" } }, { kind: "Field", name: { kind: "Name", value: "picture" } }, { kind: "Field", name: { kind: "Name", value: "createdAt" } }] } }] } }] }, c = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "MyHolograms" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "first" } }, type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }, defaultValue: { kind: "IntValue", value: "20" } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "me" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "username" } }, { kind: "Field", name: { kind: "Name", value: "displayName" } }, { kind: "Field", name: { kind: "Name", value: "holograms" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "Variable", name: { kind: "Name", value: "first" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "nodes" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "aspectRatio" } }, { kind: "Field", name: { kind: "Name", value: "quiltCols" } }, { kind: "Field", name: { kind: "Name", value: "quiltRows" } }, { kind: "Field", name: { kind: "Name", value: "quiltTileCount" } }, { kind: "Field", name: { kind: "Name", value: "sourceImages" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }, { kind: "Field", name: { kind: "Name", value: "fileSize" } }] } }] } }] } }] } }] } }] }, F = "https://blocks.glass/api/graphql";
class g {
  constructor(i) {
    a(this, "token");
    this.token = i;
  }
  async me() {
    return await this.api({
      document: r
    });
  }
  async hologram(i) {
    return await this.api({
      document: v,
      variables: {
        id: i.toString()
      }
    });
  }
  async playlist(i, n = 100) {
    return await this.api({
      document: N,
      variables: {
        id: i,
        first: n
      }
    });
  }
  async myHolograms(i = 20) {
    return await this.api({
      document: c,
      variables: {
        first: i
      }
    });
  }
  async api(i) {
    const n = {
      document: i.document,
      variables: i == null ? void 0 : i.variables,
      url: F,
      requestHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    };
    return await s(n);
  }
}
export {
  g as BlocksClient
};
