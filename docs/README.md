@lookingglass/blocks.js

# @lookingglass/blocks.js

## Table of contents

### Enumerations

- [HologramType](enums/HologramType.md)
- [ImageAssetKind](enums/ImageAssetKind.md)
- [PlaylistPrivacy](enums/PlaylistPrivacy.md)
- [PrivacyType](enums/PrivacyType.md)

### Classes

- [BlocksClient](classes/BlocksClient.md)
- [BlocksSpaAuth](classes/BlocksSpaAuth.md)

### Type Aliases

- [AuthClientOptions](README.md#authclientoptions)
- [BlocksClientArgs](README.md#blocksclientargs)
- [CreateHologramFromImageInput](README.md#createhologramfromimageinput)
- [CreateQuiltHologramInputType](README.md#createquiltholograminputtype)
- [GraphqlDocument](README.md#graphqldocument)
- [UpdateHologramInput](README.md#updateholograminput)

### Variables

- [HOLOGRAM\_QUILT\_IMAGE\_FORMATS](README.md#hologram_quilt_image_formats)
- [HOLOGRAM\_QUILT\_IMAGE\_MIMETYPES](README.md#hologram_quilt_image_mimetypes)

### Functions

- [createAuthClient](README.md#createauthclient)
- [getToken](README.md#gettoken)
- [isAuthenticated](README.md#isauthenticated)
- [loginWithRedirect](README.md#loginwithredirect)
- [logout](README.md#logout)
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

### CreateHologramFromImageInput

Ƭ **CreateHologramFromImageInput**: `Object`

The input arguments for the createHologram mutation.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `description?` | `InputMaybe`<`Scalars`[``"String"``][``"input"``]\> | - |
| `imageUrl` | `Scalars`[``"String"``][``"input"``] | The public URL of the image to be converted to RGBD. |
| `privacy?` | `InputMaybe`<[`PrivacyType`](enums/PrivacyType.md)\> | - |
| `title?` | `InputMaybe`<`Scalars`[``"String"``][``"input"``]\> | - |

___

### CreateQuiltHologramInputType

Ƭ **CreateQuiltHologramInputType**: `Object`

The input arguments for the createQuiltHologram mutation.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `aspectRatio?` | `InputMaybe`<`Scalars`[``"Float"``][``"input"``]\> | - |
| `description?` | `InputMaybe`<`Scalars`[``"String"``][``"input"``]\> | - |
| `imageUrl` | `Scalars`[``"String"``][``"input"``] | The URL of the image |
| `isPublished?` | `InputMaybe`<`Scalars`[``"Boolean"``][``"input"``]\> | - |
| `privacy?` | `InputMaybe`<[`PrivacyType`](enums/PrivacyType.md)\> | Restricted |
| `quiltCols?` | `InputMaybe`<`Scalars`[``"Int"``][``"input"``]\> | - |
| `quiltRows?` | `InputMaybe`<`Scalars`[``"Int"``][``"input"``]\> | - |
| `quiltTileCount?` | `InputMaybe`<`Scalars`[``"Int"``][``"input"``]\> | - |
| `title?` | `InputMaybe`<`Scalars`[``"String"``][``"input"``]\> | - |

___

### GraphqlDocument

Ƭ **GraphqlDocument**: `RequestDocument` \| `TypedQueryDocumentNode`<`any`, `Variables`\> \| `string`

___

### UpdateHologramInput

Ƭ **UpdateHologramInput**: `Object`

The input arguments for the updateHologram mutation.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aspectRatio?` | `InputMaybe`<`Scalars`[``"Float"``][``"input"``]\> |
| `description?` | `InputMaybe`<`Scalars`[``"String"``][``"input"``]\> |
| `id` | `Scalars`[``"Int"``][``"input"``] |
| `isPublished?` | `InputMaybe`<`Scalars`[``"Boolean"``][``"input"``]\> |
| `privacy?` | `InputMaybe`<[`PrivacyType`](enums/PrivacyType.md)\> |
| `quiltCols?` | `InputMaybe`<`Scalars`[``"Int"``][``"input"``]\> |
| `quiltRows?` | `InputMaybe`<`Scalars`[``"Int"``][``"input"``]\> |
| `quiltTileCount?` | `InputMaybe`<`Scalars`[``"Int"``][``"input"``]\> |
| `rgbdDepthiness?` | `InputMaybe`<`Scalars`[``"Float"``][``"input"``]\> |
| `rgbdFocus?` | `InputMaybe`<`Scalars`[``"Float"``][``"input"``]\> |
| `rgbdStretch?` | `InputMaybe`<`Scalars`[``"Float"``][``"input"``]\> |
| `rgbdZoom?` | `InputMaybe`<`Scalars`[``"Float"``][``"input"``]\> |
| `title?` | `InputMaybe`<`Scalars`[``"String"``][``"input"``]\> |

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

### logout

▸ **logout**(`authClient`, `enableRedirect?`): `Promise`<`void`\>

Signs the user out

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `authClient` | `Auth0Client` | `undefined` |
| `enableRedirect` | `boolean` | `true` |

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
