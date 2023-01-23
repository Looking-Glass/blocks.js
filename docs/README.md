@lookingglass/blocks.js

# @lookingglass/blocks.js

## Table of contents

### Classes

- [BlocksClient](classes/BlocksClient.md)
- [BlocksSpaAuth](classes/BlocksSpaAuth.md)

### Type Aliases

- [AuthClientOptions](README.md#authclientoptions)
- [BlocksClientArgs](README.md#blocksclientargs)
- [GraphqlDocument](README.md#graphqldocument)

### Variables

- [HOLOGRAM\_QUILT\_IMAGE\_FORMATS](README.md#hologram_quilt_image_formats)
- [HOLOGRAM\_QUILT\_IMAGE\_MIMETYPES](README.md#hologram_quilt_image_mimetypes)

### Functions

- [createAuthClient](README.md#createauthclient)
- [getToken](README.md#gettoken)
- [isAuthenticated](README.md#isauthenticated)
- [loginWithRedirect](README.md#loginwithredirect)
- [validateSession](README.md#validatesession)

## Type Aliases

### AuthClientOptions

Ƭ **AuthClientOptions**: `Omit`<`Auth0ClientOptions`, ``"domain"``\> & { `domain?`: `string`  }

___

### BlocksClientArgs

Ƭ **BlocksClientArgs**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiUrl?` | `string` | Change the API url if you're using a self-hosted version of Blocks **`Default`** https://blocks.glass |
| `token` | `string` \| ``null`` | The JWT token that's used to authenticate with the Blocks API |

___

### GraphqlDocument

Ƭ **GraphqlDocument**: `RequestDocument` \| `TypedQueryDocumentNode`<`any`, `Variables`\> \| `string`

## Variables

### HOLOGRAM\_QUILT\_IMAGE\_FORMATS

• `Const` **HOLOGRAM\_QUILT\_IMAGE\_FORMATS**: `string`[]

**`Default Value`**

["png", "jpg", "jpeg", "webp", "bmp"]

___

### HOLOGRAM\_QUILT\_IMAGE\_MIMETYPES

• `Const` **HOLOGRAM\_QUILT\_IMAGE\_MIMETYPES**: `string`[]

**`Default Value`**

["image/png", "image/jpg", "image/jpeg", "image/webp", "image/bmp"]

## Functions

### createAuthClient

▸ **createAuthClient**(`options`): `Auth0Client`

Create a new Auth0Client with default Blocks API configuration
```tsx
const authClient = createAuthClient({
	clientId: "BLOCKS_CLIENT_ID_HERE",
})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AuthClientOptions`](README.md#authclientoptions) |

#### Returns

`Auth0Client`

___

### getToken

▸ **getToken**(): `string`

Returns the token from the session. This is just fetching it from cache.
If you are wanting to validate a new sign in see [validateSession](README.md#validatesession)

#### Returns

`string`

___

### isAuthenticated

▸ **isAuthenticated**(): `boolean`

Returns if the user is logged in or not

#### Returns

`boolean`

___

### loginWithRedirect

▸ **loginWithRedirect**(`authClient`, `redirectUri`): `Promise`<`void`\>

Redirects the user to the Auth0 login page. Use this to sign in users. When the user is redirected back to your app, you can use [validateSession](README.md#validatesession) to validate the session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `authClient` | `Auth0Client` |
| `redirectUri` | `string` |

#### Returns

`Promise`<`void`\>

___

### validateSession

▸ **validateSession**(`authClient`): `Promise`<`string` \| ``null``\>

Validates the session with Auth0 and returns the token if it exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `authClient` | `Auth0Client` |

#### Returns

`Promise`<`string` \| ``null``\>
