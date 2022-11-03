var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("graphql-request")) : typeof define === "function" && define.amd ? define(["exports", "graphql-request"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory((global["@lookingglass/blocks"] = global["@lookingglass/blocks"] || {}, global["@lookingglass/blocks"].js = {}), global["graphql-request"]));
})(this, function(exports2, request) {
  "use strict";
  const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
  const request__default = /* @__PURE__ */ _interopDefaultLegacy(request);
  var HologramType;
  (function(HologramType2) {
    HologramType2["Quilt"] = "QUILT";
    HologramType2["Rgbd"] = "RGBD";
  })(HologramType || (HologramType = {}));
  var PlaylistPrivacy;
  (function(PlaylistPrivacy2) {
    PlaylistPrivacy2["OnlyMe"] = "ONLY_ME";
    PlaylistPrivacy2["Password"] = "PASSWORD";
    PlaylistPrivacy2["Public"] = "PUBLIC";
    PlaylistPrivacy2["Unlisted"] = "UNLISTED";
  })(PlaylistPrivacy || (PlaylistPrivacy = {}));
  var PrivacyType;
  (function(PrivacyType2) {
    PrivacyType2["OnlyMe"] = "ONLY_ME";
    PrivacyType2["Public"] = "PUBLIC";
    PrivacyType2["Unlisted"] = "UNLISTED";
  })(PrivacyType || (PrivacyType = {}));
  var Role;
  (function(Role2) {
    Role2["Admin"] = "ADMIN";
    Role2["User"] = "USER";
  })(Role || (Role = {}));
  const FindHologramDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "FindHologram" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "hologramFindById" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "aspectRatio" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltCols" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltRows" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltTileCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceImages" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fileSize" } }] } }] } }] } }] };
  const MyHologramsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "MyHolograms" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "first" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } }, "defaultValue": { "kind": "IntValue", "value": "20" } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "me" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "username" } }, { "kind": "Field", "name": { "kind": "Name", "value": "holograms" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "first" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "first" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "aspectRatio" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltCols" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltRows" } }, { "kind": "Field", "name": { "kind": "Name", "value": "quiltTileCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceImages" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "width" } }, { "kind": "Field", "name": { "kind": "Name", "value": "height" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fileSize" } }] } }] } }] } }] } }] } }] };
  const apiUrl = "https://blocks.glass/api/graphql";
  class BlocksClient {
    constructor(token) {
      __publicField(this, "token");
      this.token = token;
    }
    async getHologram(id) {
      return await this.api({
        document: FindHologramDocument,
        variables: {
          id: id.toString()
        }
      });
    }
    async getMyHolograms(first = 20) {
      return await this.api({
        document: MyHologramsDocument,
        variables: {
          first
        }
      });
    }
    async api(options) {
      const test = {
        document: options.document,
        url: apiUrl,
        requestHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      };
      return await request__default.default(test);
    }
  }
  exports2.BlocksClient = BlocksClient;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});