var g = Object.defineProperty;
var p = (e, i, n) => i in e ? g(e, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[i] = n;
var d = (e, i, n) => (p(e, typeof i != "symbol" ? i + "" : i, n), n);
import { Auth0Client as y } from "@auth0/auth0-spa-js";
import h from "graphql-request";
const m = "blocksToken";
let a, S;
const l = () => document.querySelector("[data-login]"), t = () => document.querySelector("[data-logout]"), o = () => document.querySelectorAll("[data-logged-in]"), u = () => document.querySelectorAll("[data-logged-out]");
function f() {
  var e, i;
  (e = l()) == null || e.addEventListener("click", async () => {
    console.log("Logging in"), await (a == null ? void 0 : a.loginWithRedirect({
      authorizationParams: {
        redirect_uri: S
      }
    }));
  }), (i = t()) == null || i.addEventListener("click", async () => {
    console.log("Logging out"), sessionStorage.removeItem(m), F();
  });
}
async function b() {
  const e = window.location.search;
  if (e.includes("code=") && e.includes("state=") && a) {
    try {
      await a.handleRedirectCallback();
    } catch (n) {
      console.error(n);
    }
    if (await a.isAuthenticated()) {
      const n = await a.getTokenSilently();
      sessionStorage.setItem(m, n), window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
}
async function F() {
  k.isAuthenticated() ? (l().style.display = "none", t().style.display = "", o().forEach((e) => {
    e.style.display = "";
  }), u().forEach((e) => {
    e.style.display = "none";
  })) : (l().style.display = "", t().style.display = "none", o().forEach((e) => {
    e.style.display = "none";
  }), u().forEach((e) => {
    e.style.display = "";
  }));
}
class k {
  static async init(i) {
    f(), S = i.redirectUri, a = new y({
      domain: i.domain || "blocks.us.auth0.com",
      clientId: i.clientId,
      authorizationParams: {
        audience: "https://blocks.glass"
      }
    }), await b(), await F();
  }
  static isAuthenticated() {
    return k.getJWT() != "";
  }
  static getJWT() {
    return sessionStorage.getItem(m) || "";
  }
}
var s;
(function(e) {
  e.Quilt = "QUILT", e.Rgbd = "RGBD";
})(s || (s = {}));
var c;
(function(e) {
  e.OnlyMe = "ONLY_ME", e.Password = "PASSWORD", e.Public = "PUBLIC", e.Unlisted = "UNLISTED";
})(c || (c = {}));
var r;
(function(e) {
  e.All = "ALL", e.OnlyMe = "ONLY_ME", e.Password = "PASSWORD", e.Public = "PUBLIC", e.Unlisted = "UNLISTED";
})(r || (r = {}));
var v;
(function(e) {
  e.OnlyMe = "ONLY_ME", e.Public = "PUBLIC", e.Unlisted = "UNLISTED";
})(v || (v = {}));
var N;
(function(e) {
  e.Admin = "ADMIN", e.User = "USER";
})(N || (N = {}));
const w = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "FindHologram" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "id" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "hologramFindById" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "Variable", name: { kind: "Name", value: "id" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "aspectRatio" } }, { kind: "Field", name: { kind: "Name", value: "quiltCols" } }, { kind: "Field", name: { kind: "Name", value: "quiltRows" } }, { kind: "Field", name: { kind: "Name", value: "quiltTileCount" } }, { kind: "Field", name: { kind: "Name", value: "sourceImages" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }, { kind: "Field", name: { kind: "Name", value: "fileSize" } }] } }] } }] } }] }, D = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "FindPlaylist" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "id" } }, type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } }, { kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "lookup" } }, type: { kind: "NamedType", name: { kind: "Name", value: "String" } } }, { kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "first" } }, type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }, defaultValue: { kind: "IntValue", value: "50" } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "playlist" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "Variable", name: { kind: "Name", value: "id" } } }, { kind: "Argument", name: { kind: "Name", value: "lookup" }, value: { kind: "Variable", name: { kind: "Name", value: "lookup" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "description" } }, { kind: "Field", name: { kind: "Name", value: "permalink" } }, { kind: "Field", name: { kind: "Name", value: "privacy" } }, { kind: "Field", name: { kind: "Name", value: "updatedAt" } }, { kind: "Field", name: { kind: "Name", value: "items" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "Variable", name: { kind: "Name", value: "first" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "totalCount" } }, { kind: "Field", name: { kind: "Name", value: "pageInfo" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "hasNextPage" } }, { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } }, { kind: "Field", name: { kind: "Name", value: "startCursor" } }, { kind: "Field", name: { kind: "Name", value: "endCursor" } }] } }, { kind: "Field", name: { kind: "Name", value: "edges" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "node" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "hologramId" } }, { kind: "Field", name: { kind: "Name", value: "position" } }, { kind: "Field", name: { kind: "Name", value: "hologram" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "aspectRatio" } }, { kind: "Field", name: { kind: "Name", value: "quiltCols" } }, { kind: "Field", name: { kind: "Name", value: "quiltRows" } }, { kind: "Field", name: { kind: "Name", value: "quiltTileCount" } }, { kind: "Field", name: { kind: "Name", value: "sourceImages" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }, { kind: "Field", name: { kind: "Name", value: "fileSize" } }] } }] } }] } }] } }] } }, { kind: "Field", name: { kind: "Name", value: "thumbnail" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }] } }] } }] } }] }, I = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "Me" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "me" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "username" } }, { kind: "Field", name: { kind: "Name", value: "displayName" } }, { kind: "Field", name: { kind: "Name", value: "email" } }, { kind: "Field", name: { kind: "Name", value: "picture" } }, { kind: "Field", name: { kind: "Name", value: "createdAt" } }] } }] } }] }, A = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "MyHolograms" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "first" } }, type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }, defaultValue: { kind: "IntValue", value: "20" } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "me" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "username" } }, { kind: "Field", name: { kind: "Name", value: "displayName" } }, { kind: "Field", name: { kind: "Name", value: "holograms" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "Variable", name: { kind: "Name", value: "first" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "nodes" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "aspectRatio" } }, { kind: "Field", name: { kind: "Name", value: "quiltCols" } }, { kind: "Field", name: { kind: "Name", value: "quiltRows" } }, { kind: "Field", name: { kind: "Name", value: "quiltTileCount" } }, { kind: "Field", name: { kind: "Name", value: "sourceImages" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }, { kind: "Field", name: { kind: "Name", value: "fileSize" } }] } }] } }] } }] } }] } }] }, q = "https://blocks.glass/api/graphql";
class T {
  constructor(i) {
    d(this, "token");
    d(this, "auth");
    this.token = i;
  }
  async me() {
    return await this.api({
      document: I
    });
  }
  async hologram(i) {
    return await this.api({
      document: w,
      variables: {
        id: i.toString()
      }
    });
  }
  async playlist(i, n = 100) {
    return await this.api({
      document: D,
      variables: {
        id: i,
        first: n
      }
    });
  }
  async myHolograms(i = 20) {
    return await this.api({
      document: A,
      variables: {
        first: i
      }
    });
  }
  async api(i) {
    const n = {
      document: i.document,
      variables: i == null ? void 0 : i.variables,
      url: q,
      requestHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    };
    return await h(n);
  }
}
export {
  T as BlocksClient,
  k as BlocksSpaAuth
};
