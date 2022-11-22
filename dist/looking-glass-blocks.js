var f = Object.defineProperty;
var b = (e, i, n) => i in e ? f(e, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[i] = n;
var o = (e, i, n) => (b(e, typeof i != "symbol" ? i + "" : i, n), n);
import { Auth0Client as w } from "@auth0/auth0-spa-js";
import I from "graphql-request";
const k = "blocksToken";
let t, F;
const m = () => document.querySelector("[data-login]"), s = () => document.querySelector("[data-logout]"), r = () => document.querySelectorAll("[data-logged-in]"), c = () => document.querySelectorAll("[data-logged-out]");
function D() {
  var e, i;
  (e = m()) == null || e.addEventListener("click", async () => {
    console.log("Logging in"), await (t == null ? void 0 : t.loginWithRedirect({
      authorizationParams: {
        redirect_uri: F
      }
    }));
  }), (i = s()) == null || i.addEventListener("click", async () => {
    console.log("Logging out"), sessionStorage.removeItem(k), h();
  });
}
async function A() {
  const e = window.location.search;
  if (e.includes("code=") && e.includes("state=") && t) {
    try {
      await t.handleRedirectCallback();
    } catch (n) {
      console.error(n);
    }
    if (await t.isAuthenticated()) {
      const n = await t.getTokenSilently();
      sessionStorage.setItem(k, n), window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
}
async function h() {
  u.isAuthenticated() ? (m().style.display = "none", s().style.display = "", r().forEach((e) => {
    e.style.display = "";
  }), c().forEach((e) => {
    e.style.display = "none";
  })) : (m().style.display = "", s().style.display = "none", r().forEach((e) => {
    e.style.display = "none";
  }), c().forEach((e) => {
    e.style.display = "";
  }));
}
class u {
  static async init(i) {
    D(), F = i.redirectUri, t = new w({
      domain: i.domain || "blocks.us.auth0.com",
      clientId: i.clientId,
      authorizationParams: {
        audience: "https://blocks.glass"
      }
    }), await A(), await h();
  }
  static isAuthenticated() {
    return u.getJWT() != "";
  }
  static getJWT() {
    return sessionStorage.getItem(k) || "";
  }
}
var v;
(function(e) {
  e.Quilt = "QUILT", e.Rgbd = "RGBD";
})(v || (v = {}));
var N;
(function(e) {
  e.OnlyMe = "ONLY_ME", e.Password = "PASSWORD", e.Public = "PUBLIC", e.Unlisted = "UNLISTED";
})(N || (N = {}));
var g;
(function(e) {
  e.All = "ALL", e.OnlyMe = "ONLY_ME", e.Password = "PASSWORD", e.Public = "PUBLIC", e.Unlisted = "UNLISTED";
})(g || (g = {}));
var S;
(function(e) {
  e.OnlyMe = "ONLY_ME", e.Public = "PUBLIC", e.Unlisted = "UNLISTED";
})(S || (S = {}));
var p;
(function(e) {
  e.Admin = "ADMIN", e.User = "USER";
})(p || (p = {}));
const L = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "FindHologram" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "id" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "hologramFindById" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "Variable", name: { kind: "Name", value: "id" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "aspectRatio" } }, { kind: "Field", name: { kind: "Name", value: "quiltCols" } }, { kind: "Field", name: { kind: "Name", value: "quiltRows" } }, { kind: "Field", name: { kind: "Name", value: "quiltTileCount" } }, { kind: "Field", name: { kind: "Name", value: "sourceImages" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }, { kind: "Field", name: { kind: "Name", value: "fileSize" } }] } }] } }] } }] }, E = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "FindPlaylist" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "id" } }, type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } }, { kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "lookup" } }, type: { kind: "NamedType", name: { kind: "Name", value: "String" } } }, { kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "first" } }, type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }, defaultValue: { kind: "IntValue", value: "50" } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "playlist" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "Variable", name: { kind: "Name", value: "id" } } }, { kind: "Argument", name: { kind: "Name", value: "lookup" }, value: { kind: "Variable", name: { kind: "Name", value: "lookup" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "description" } }, { kind: "Field", name: { kind: "Name", value: "permalink" } }, { kind: "Field", name: { kind: "Name", value: "privacy" } }, { kind: "Field", name: { kind: "Name", value: "updatedAt" } }, { kind: "Field", name: { kind: "Name", value: "items" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "Variable", name: { kind: "Name", value: "first" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "totalCount" } }, { kind: "Field", name: { kind: "Name", value: "pageInfo" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "hasNextPage" } }, { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" } }, { kind: "Field", name: { kind: "Name", value: "startCursor" } }, { kind: "Field", name: { kind: "Name", value: "endCursor" } }] } }, { kind: "Field", name: { kind: "Name", value: "edges" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "node" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "hologramId" } }, { kind: "Field", name: { kind: "Name", value: "position" } }, { kind: "Field", name: { kind: "Name", value: "hologram" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "aspectRatio" } }, { kind: "Field", name: { kind: "Name", value: "quiltCols" } }, { kind: "Field", name: { kind: "Name", value: "quiltRows" } }, { kind: "Field", name: { kind: "Name", value: "quiltTileCount" } }, { kind: "Field", name: { kind: "Name", value: "sourceImages" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }, { kind: "Field", name: { kind: "Name", value: "fileSize" } }] } }] } }] } }] } }] } }, { kind: "Field", name: { kind: "Name", value: "thumbnail" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }] } }] } }] } }] }, U = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "mutation", name: { kind: "Name", value: "CreateQuiltHologram" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "data" } }, type: { kind: "NamedType", name: { kind: "Name", value: "CreateQuiltHologramInputType" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "createQuiltHologram" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "data" }, value: { kind: "Variable", name: { kind: "Name", value: "data" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "permalink" } }] } }] } }] }, O = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "Me" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "me" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "username" } }, { kind: "Field", name: { kind: "Name", value: "displayName" } }, { kind: "Field", name: { kind: "Name", value: "email" } }, { kind: "Field", name: { kind: "Name", value: "picture" } }, { kind: "Field", name: { kind: "Name", value: "createdAt" } }] } }] } }] }, T = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "MyHolograms" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "first" } }, type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }, defaultValue: { kind: "IntValue", value: "20" } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "me" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "username" } }, { kind: "Field", name: { kind: "Name", value: "displayName" } }, { kind: "Field", name: { kind: "Name", value: "holograms" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "Variable", name: { kind: "Name", value: "first" } } }], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "nodes" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "title" } }, { kind: "Field", name: { kind: "Name", value: "aspectRatio" } }, { kind: "Field", name: { kind: "Name", value: "quiltCols" } }, { kind: "Field", name: { kind: "Name", value: "quiltRows" } }, { kind: "Field", name: { kind: "Name", value: "quiltTileCount" } }, { kind: "Field", name: { kind: "Name", value: "sourceImages" }, selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }, { kind: "Field", name: { kind: "Name", value: "url" } }, { kind: "Field", name: { kind: "Name", value: "width" } }, { kind: "Field", name: { kind: "Name", value: "height" } }, { kind: "Field", name: { kind: "Name", value: "type" } }, { kind: "Field", name: { kind: "Name", value: "fileSize" } }] } }] } }] } }] } }] } }] }, q = ["png", "jpg", "jpeg", "webp", "bmp"], H = q.map((e) => `image/${e}`), V = {
  token: "",
  apiUrl: "https://blocks.glass",
  graphqlApiUrl: "https://blocks.glass/api/graphql"
};
class P {
  constructor(i) {
    o(this, "auth");
    o(this, "args");
    this.args = { ...V, ...i }, console.log(this.args);
  }
  async me() {
    return await this.api({
      document: O
    });
  }
  async hologram(i) {
    return await this.api({
      document: L,
      variables: {
        id: i.toString()
      }
    });
  }
  async playlist(i, n = 100) {
    return await this.api({
      document: E,
      variables: {
        id: i,
        first: n
      }
    });
  }
  async myHolograms(i = 20) {
    return await this.api({
      document: T,
      variables: {
        first: i
      }
    });
  }
  async createQuiltHologram(i) {
    return await this.api({
      document: U,
      variables: { data: i }
    });
  }
  async uploadAndCreateQuiltHologram(i, n) {
    const d = await this.getImageSizeFromFile(i), a = await this.uploadImage(i);
    return await this.createQuiltHologram({
      ...n,
      imageUrl: a,
      width: d.width,
      height: d.height,
      fileSize: i.size
    });
  }
  async uploadImage(i) {
    var a;
    const n = await this.getS3PresignedPost(i), d = new FormData();
    if (Object.entries({ ...n.fields, file: i }).forEach(([l, y]) => {
      d.append(l, y);
    }), n != null && n.url)
      return await fetch(n.url, {
        method: "POST",
        body: d
      }), `${n.url}/${(a = n.fields) == null ? void 0 : a.key}`;
    throw new Error(n.error);
  }
  async getImageSizeFromFile(i) {
    return new Promise((n, d) => {
      const a = document.createElement("img");
      a.src = URL.createObjectURL(i), a.style.display = "none", a.addEventListener("load", async () => {
        const l = {
          width: a.naturalWidth,
          height: a.naturalHeight
        };
        document.body.removeChild(a), n(l);
      }), a.addEventListener("error", () => {
        d("Failed to get dimenisions from image");
      }), document.body.appendChild(a);
    });
  }
  async getS3PresignedPost(i) {
    const n = await fetch(this.args.apiUrl + "/api/upload", {
      method: "POST",
      body: JSON.stringify({
        file: i.name
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.args.token}`
      }
    });
    return n.status == 200 ? await n.json() : { error: `Response failed ${n.status}` };
  }
  async api(i) {
    const n = {
      document: i.document,
      variables: i == null ? void 0 : i.variables,
      url: this.args.graphqlApiUrl,
      requestHeaders: {
        Authorization: `Bearer ${this.args.token}`
      }
    };
    return await I(n);
  }
}
export {
  P as BlocksClient,
  u as BlocksSpaAuth,
  U as CreateQuiltHologramDocument,
  L as FindHologramDocument,
  E as FindPlaylistDocument,
  q as HOLOGRAM_QUILT_IMAGE_FORMATS,
  H as HOLOGRAM_QUILT_IMAGE_MIMETYPES,
  v as HologramType,
  O as MeDocument,
  T as MyHologramsDocument,
  N as PlaylistPrivacy,
  g as PlaylistPrivacyFilter,
  S as PrivacyType,
  p as Role
};
