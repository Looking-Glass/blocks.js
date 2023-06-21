var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("graphql-request"), require("cross-fetch"), require("@auth0/auth0-spa-js")) : typeof define === "function" && define.amd ? define(["exports", "graphql-request", "cross-fetch", "@auth0/auth0-spa-js"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory((global["@lookingglass/blocks"] = global["@lookingglass/blocks"] || {}, global["@lookingglass/blocks"].js = {}), global["graphql-request"], global["cross-fetch"], global["@auth0/auth0-spa-js"]));
})(this, function(exports2, graphqlRequest, fetch, auth0SpaJs) {
  "use strict";
  const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
  const fetch__default = /* @__PURE__ */ _interopDefaultLegacy(fetch);
  const LoginBtn = () => document.querySelector("[data-login]");
  const LogoutBtn = () => document.querySelector("[data-logout]");
  const LoggedInEls = () => document.querySelectorAll("[data-logged-in]");
  const LoggedOutEls = () => document.querySelectorAll("[data-logged-out]");
  function bindListeners(authClient) {
    var _a, _b;
    (_a = LoginBtn()) == null ? void 0 : _a.addEventListener("click", async (ev) => {
      var _a2;
      const target = ev.target;
      const redirect = (_a2 = target.dataset.redirect) != null ? _a2 : window.location.href;
      await (authClient == null ? void 0 : authClient.loginWithRedirect({
        authorizationParams: {
          redirect_uri: redirect
        }
      }));
    });
    (_b = LogoutBtn()) == null ? void 0 : _b.addEventListener("click", async () => {
      await logout(authClient, false);
      await updateUI();
    });
  }
  async function updateUI() {
    const loginBtn = LoginBtn();
    const logoutBtn = LogoutBtn();
    if (isAuthenticated()) {
      document.body.classList.remove("logged-out");
      document.body.classList.add("logged-in");
      if (loginBtn) {
        loginBtn.style.display = "none";
      }
      if (logoutBtn) {
        logoutBtn.style.display = "";
      }
      LoggedInEls().forEach((el) => {
        el.style.display = "";
      });
      LoggedOutEls().forEach((el) => {
        el.style.display = "none";
      });
    } else {
      document.body.classList.remove("logged-in");
      document.body.classList.add("logged-out");
      if (loginBtn) {
        loginBtn.style.display = "";
      }
      if (logoutBtn) {
        logoutBtn.style.display = "none";
      }
      LoggedInEls().forEach((el) => {
        el.style.display = "none";
      });
      LoggedOutEls().forEach((el) => {
        el.style.display = "";
      });
    }
  }
  class BlocksSpaAuth {
    constructor() {
    }
    static async init(authClient) {
      bindListeners(authClient);
      await updateUI();
      await validateSession(authClient);
      await updateUI();
    }
  }
  exports2.HologramType = void 0;
  (function(HologramType2) {
    HologramType2["Quilt"] = "QUILT";
    HologramType2["Rgbd"] = "RGBD";
  })(exports2.HologramType || (exports2.HologramType = {}));
  exports2.ImageAssetKind = void 0;
  (function(ImageAssetKind2) {
    ImageAssetKind2["Depth"] = "DEPTH";
    ImageAssetKind2["ImagesetVideo"] = "IMAGESET_VIDEO";
    ImageAssetKind2["None"] = "NONE";
    ImageAssetKind2["Preview"] = "PREVIEW";
    ImageAssetKind2["Rgbd"] = "RGBD";
    ImageAssetKind2["Source"] = "SOURCE";
  })(exports2.ImageAssetKind || (exports2.ImageAssetKind = {}));
  exports2.PlaylistPrivacy = void 0;
  (function(PlaylistPrivacy2) {
    PlaylistPrivacy2["OnlyMe"] = "ONLY_ME";
    PlaylistPrivacy2["Password"] = "PASSWORD";
    PlaylistPrivacy2["Public"] = "PUBLIC";
    PlaylistPrivacy2["Unlisted"] = "UNLISTED";
  })(exports2.PlaylistPrivacy || (exports2.PlaylistPrivacy = {}));
  var PlaylistPrivacyFilter;
  (function(PlaylistPrivacyFilter2) {
    PlaylistPrivacyFilter2["All"] = "ALL";
    PlaylistPrivacyFilter2["OnlyMe"] = "ONLY_ME";
    PlaylistPrivacyFilter2["Password"] = "PASSWORD";
    PlaylistPrivacyFilter2["Public"] = "PUBLIC";
    PlaylistPrivacyFilter2["Unlisted"] = "UNLISTED";
  })(PlaylistPrivacyFilter || (PlaylistPrivacyFilter = {}));
  exports2.PrivacyType = void 0;
  (function(PrivacyType2) {
    PrivacyType2["OnlyMe"] = "ONLY_ME";
    PrivacyType2["Public"] = "PUBLIC";
    PrivacyType2["Unlisted"] = "UNLISTED";
  })(exports2.PrivacyType || (exports2.PrivacyType = {}));
  var Role;
  (function(Role2) {
    Role2["Admin"] = "ADMIN";
    Role2["User"] = "USER";
  })(Role || (Role = {}));
  const CreateQuiltHologramDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "CreateQuiltHologram" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "data" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CreateQuiltHologramInputType" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createQuiltHologram" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "data" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "data" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "permalink" } }] } }] } }] };
  const CreateRgbdHologramDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "CreateRgbdHologram" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "data" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CreateHologramFromImageInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createHologramFromImage" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "data" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "data" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "permalink" } }] } }] } }] };
  const DeleteHologramDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "DeleteHologram" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "deleteHologram" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] };
  const UpdateHologramDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "UpdateHologram" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "data" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "UpdateHologramInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "updateHologram" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "data" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "data" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "permalink" } }] } }] } }] };
  const FindHologramDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "FindHologram" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "lookup" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "thumbnailWidth" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } }, "defaultValue": { "kind": "IntValue", "value": "500" } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "hologram" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "lookup" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "lookup" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "HologramRoot" } }] } }] } }, { "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "HologramRoot" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Hologram" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "permalink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "aspectRatio" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltCols" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltRows" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltTileCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "privacy" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "thumbnail" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "width" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "thumbnailWidth" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "user" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "username" } }, { "kind": "Field", "name": { "kind": "Name", "value": "displayName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "picture" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceImages" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fileSize" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "previewGifAssets" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "previewVideoAssets" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "rgbdAssets" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "kind" } }] } }] } }] };
  const FindPlaylistDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "FindPlaylist" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "lookup" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "first" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } }, "defaultValue": { "kind": "IntValue", "value": "50" } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "thumbnailWidth" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } }, "defaultValue": { "kind": "IntValue", "value": "500" } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "playlist" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "lookup" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "lookup" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "permalink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "privacy" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "items" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "first" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "first" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "totalCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "pageInfo" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "hasNextPage" } }, { "kind": "Field", "name": { "kind": "Name", "value": "hasPreviousPage" } }, { "kind": "Field", "name": { "kind": "Name", "value": "startCursor" } }, { "kind": "Field", "name": { "kind": "Name", "value": "endCursor" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "edges" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "node" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "hologramId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "position" } }, { "kind": "Field", "name": { "kind": "Name", "value": "hologram" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "HologramRoot" } }] } }] } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "thumbnail" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }] } }] } }] } }, { "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "HologramRoot" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Hologram" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "permalink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "aspectRatio" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltCols" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltRows" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltTileCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "privacy" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "thumbnail" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "width" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "thumbnailWidth" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "user" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "username" } }, { "kind": "Field", "name": { "kind": "Name", "value": "displayName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "picture" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceImages" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fileSize" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "previewGifAssets" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "previewVideoAssets" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "rgbdAssets" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "kind" } }] } }] } }] };
  const MeDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "Me" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "me" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "username" } }, { "kind": "Field", "name": { "kind": "Name", "value": "displayName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "picture" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }] } }] } }] };
  const MyHologramsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "MyHolograms" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "first" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } }, "defaultValue": { "kind": "IntValue", "value": "20" } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "thumbnailWidth" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } }, "defaultValue": { "kind": "IntValue", "value": "500" } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "me" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "username" } }, { "kind": "Field", "name": { "kind": "Name", "value": "displayName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "holograms" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "first" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "first" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "HologramRoot" } }] } }] } }] } }] } }, { "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "HologramRoot" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Hologram" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "permalink" } }, { "kind": "Field", "name": { "kind": "Name", "value": "aspectRatio" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltCols" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltRows" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltTileCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "privacy" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "thumbnail" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "width" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "thumbnailWidth" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "user" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "username" } }, { "kind": "Field", "name": { "kind": "Name", "value": "displayName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "picture" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceImages" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fileSize" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "previewGifAssets" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "previewVideoAssets" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "rgbdAssets" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "kind" } }] } }] } }] };
  const VerifySessionDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "VerifySession" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "me" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "username" } }, { "kind": "Field", "name": { "kind": "Name", "value": "displayName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }] } }] } }] };
  const HOLOGRAM_QUILT_IMAGE_FORMATS = ["png", "jpg", "jpeg", "webp", "bmp"];
  const HOLOGRAM_QUILT_IMAGE_MIMETYPES = HOLOGRAM_QUILT_IMAGE_FORMATS.map((f) => `image/${f}`);
  const defaults = {
    token: null,
    apiUrl: "https://blocks.glass"
  };
  class BlocksClient {
    constructor(args) {
      __publicField(this, "args");
      this.args = { ...defaults, ...args };
    }
    async verifySession() {
      return await this.request({
        document: VerifySessionDocument
      });
    }
    async me() {
      return (await this.request({
        document: MeDocument
      })).me;
    }
    async hologram(id) {
      return (await this.request({
        document: FindHologramDocument,
        variables: {
          lookup: id.toString()
        }
      })).hologram;
    }
    async playlist(id, limit = 50) {
      return (await this.request({
        document: FindPlaylistDocument,
        variables: {
          id,
          first: limit
        }
      })).playlist;
    }
    async myHolograms(first = 50) {
      return (await this.request({
        document: MyHologramsDocument,
        variables: {
          first
        }
      })).me;
    }
    async uploadAndCreateQuiltHologram(file, data) {
      const imageUrl = await this.uploadImage(file);
      return (await this.request({
        document: CreateQuiltHologramDocument,
        variables: {
          data: { ...data, imageUrl }
        }
      })).createQuiltHologram;
    }
    async uploadAndCreateRgbdHologram(file, data) {
      const imageUrl = await this.uploadImage(file);
      return (await this.request({
        document: CreateRgbdHologramDocument,
        variables: {
          data: { ...data, imageUrl }
        }
      })).createHologramFromImage;
    }
    async updateHologram(data) {
      return (await this.request({
        document: UpdateHologramDocument,
        variables: { data }
      })).updateHologram;
    }
    async deleteHologram(hologramId) {
      return (await this.request({
        document: DeleteHologramDocument,
        variables: { id: hologramId }
      })).deleteHologram;
    }
    async uploadImage(file) {
      var _a;
      const data = await this.getS3PresignedPost(file);
      const formData = new FormData();
      Object.entries({ ...data.fields, file }).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (data == null ? void 0 : data.url) {
        await fetch__default.default(data.url, {
          method: "POST",
          body: formData
        });
        const imageUrl = `${data.url}/${(_a = data.fields) == null ? void 0 : _a.key}`;
        return imageUrl;
      } else {
        throw new Error(data.error);
      }
    }
    async getS3PresignedPost(file) {
      const response = await fetch__default.default(this.args.apiUrl + "/api/upload", {
        method: "POST",
        body: JSON.stringify({
          file: file.name
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.args.token}`
        }
      });
      if (response.status == 200) {
        return await response.json();
      } else {
        return { error: `Response failed ${response.status}` };
      }
    }
    async request(options) {
      const test = {
        document: options.document,
        variables: options == null ? void 0 : options.variables,
        url: this.args.apiUrl + "/api/graphql",
        requestHeaders: {
          Authorization: `Bearer ${this.args.token}`
        }
      };
      return await graphqlRequest.request(test);
    }
  }
  let USER_JWT = "";
  function createAuthClient(options) {
    var _a, _b, _c, _d;
    return new auth0SpaJs.Auth0Client({
      ...options,
      domain: (_a = options.domain) != null ? _a : "blocks.us.auth0.com",
      clientId: (_b = options.clientId) != null ? _b : "",
      authorizationParams: {
        audience: (_d = (_c = options.authorizationParams) == null ? void 0 : _c.audience) != null ? _d : "https://blocks.glass"
      },
      sessionCheckExpiryDays: 30
    });
  }
  async function loginWithRedirect(authClient, redirectUri) {
    return await (authClient == null ? void 0 : authClient.loginWithRedirect({
      authorizationParams: {
        redirect_uri: redirectUri
      }
    }));
  }
  async function validateSession(authClient) {
    if (typeof window === "undefined") {
      console.error("Blocks validateSession should only be called client side");
      return null;
    }
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
      try {
        await authClient.handleRedirectCallback();
      } catch (e) {
      }
      const isAuthenticated2 = await authClient.isAuthenticated();
      if (isAuthenticated2) {
        USER_JWT = await authClient.getTokenSilently();
        window.history.replaceState({}, document.title, window.location.pathname);
        return USER_JWT;
      }
    } else {
      try {
        USER_JWT = await authClient.getTokenSilently();
      } catch (e) {
        USER_JWT = "";
      }
      return getToken();
    }
    return null;
  }
  async function logout(authClient, enableRedirect = true) {
    await authClient.logout({
      onRedirect: enableRedirect ? void 0 : async (url) => {
      }
    });
  }
  function isAuthenticated() {
    return getToken() != "";
  }
  function getToken() {
    return USER_JWT;
  }
  exports2.BlocksClient = BlocksClient;
  exports2.BlocksSpaAuth = BlocksSpaAuth;
  exports2.HOLOGRAM_QUILT_IMAGE_FORMATS = HOLOGRAM_QUILT_IMAGE_FORMATS;
  exports2.HOLOGRAM_QUILT_IMAGE_MIMETYPES = HOLOGRAM_QUILT_IMAGE_MIMETYPES;
  exports2.createAuthClient = createAuthClient;
  exports2.getToken = getToken;
  exports2.isAuthenticated = isAuthenticated;
  exports2.loginWithRedirect = loginWithRedirect;
  exports2.logout = logout;
  exports2.validateSession = validateSession;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
