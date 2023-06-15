[@lookingglass/blocks.js](../README.md) / BlocksClient

# Class: BlocksClient

## Table of contents

### Constructors

- [constructor](BlocksClient.md#constructor)

### Methods

- [deleteHologram](BlocksClient.md#deletehologram)
- [hologram](BlocksClient.md#hologram)
- [me](BlocksClient.md#me)
- [myHolograms](BlocksClient.md#myholograms)
- [playlist](BlocksClient.md#playlist)
- [request](BlocksClient.md#request)
- [updateHologram](BlocksClient.md#updatehologram)
- [uploadAndCreateQuiltHologram](BlocksClient.md#uploadandcreatequilthologram)
- [uploadAndCreateRgbdHologram](BlocksClient.md#uploadandcreatergbdhologram)

## Constructors

### constructor

• **new BlocksClient**(`args`)

Initialize the BlocksClient with a valid JWT token. See [validateSession](../README.md#validatesession) for how to get a token.

**`Example`**

```ts
const blocksClient = new BlocksClient({
  token: "BLOCKS_API_TOKEN_HERE"
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`BlocksClientArgs`](../README.md#blocksclientargs) |

## Methods

### deleteHologram

▸ **deleteHologram**(`hologramId`): `Promise`<{ `__typename?`: ``"Hologram"`` ; `id`: `number`  }\>

Delete a hologram

#### Parameters

| Name | Type |
| :------ | :------ |
| `hologramId` | `number` |

#### Returns

`Promise`<{ `__typename?`: ``"Hologram"`` ; `id`: `number`  }\>

___

### hologram

▸ **hologram**(`id`): `Promise`<`undefined` \| ``null`` \| { `__typename?`: ``"Hologram"`` ; `aspectRatio`: `number` ; `description?`: ``null`` \| `string` ; `id`: `number` ; `permalink`: `string` ; `previewGifAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `previewVideoAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `privacy`: [`PrivacyType`](../enums/PrivacyType.md) ; `quiltCols`: `number` ; `quiltRows`: `number` ; `quiltTileCount`: `number` ; `rgbdAssets?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `kind`: [`ImageAssetKind`](../enums/ImageAssetKind.md) ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `sourceImages`: { `__typename?`: ``"ImageAsset"`` ; `fileSize`: `number` ; `height`: `number` ; `id`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `thumbnail?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  } ; `title?`: ``null`` \| `string` ; `type`: [`HologramType`](../enums/HologramType.md) ; `user`: { `__typename?`: ``"User"`` ; `displayName`: `string` ; `id`: `number` ; `picture?`: ``null`` \| `string` ; `username`: `string`  }  }\>

Fetch an invididual hologram by id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`undefined` \| ``null`` \| { `__typename?`: ``"Hologram"`` ; `aspectRatio`: `number` ; `description?`: ``null`` \| `string` ; `id`: `number` ; `permalink`: `string` ; `previewGifAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `previewVideoAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `privacy`: [`PrivacyType`](../enums/PrivacyType.md) ; `quiltCols`: `number` ; `quiltRows`: `number` ; `quiltTileCount`: `number` ; `rgbdAssets?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `kind`: [`ImageAssetKind`](../enums/ImageAssetKind.md) ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `sourceImages`: { `__typename?`: ``"ImageAsset"`` ; `fileSize`: `number` ; `height`: `number` ; `id`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `thumbnail?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  } ; `title?`: ``null`` \| `string` ; `type`: [`HologramType`](../enums/HologramType.md) ; `user`: { `__typename?`: ``"User"`` ; `displayName`: `string` ; `id`: `number` ; `picture?`: ``null`` \| `string` ; `username`: `string`  }  }\>

___

### me

▸ **me**(): `Promise`<`undefined` \| ``null`` \| { `__typename?`: ``"User"`` ; `createdAt`: `any` ; `displayName`: `string` ; `email?`: ``null`` \| `string` ; `id`: `number` ; `picture?`: ``null`` \| `string` ; `username`: `string`  }\>

Fetch info about the currently signed in user.

#### Returns

`Promise`<`undefined` \| ``null`` \| { `__typename?`: ``"User"`` ; `createdAt`: `any` ; `displayName`: `string` ; `email?`: ``null`` \| `string` ; `id`: `number` ; `picture?`: ``null`` \| `string` ; `username`: `string`  }\>

___

### myHolograms

▸ **myHolograms**(`first?`): `Promise`<`undefined` \| ``null`` \| { `__typename?`: ``"User"`` ; `displayName`: `string` ; `holograms?`: ``null`` \| { `__typename?`: ``"UserHolograms_Connection"`` ; `nodes?`: ``null`` \| (``null`` \| { `__typename?`: ``"Hologram"`` ; `aspectRatio`: `number` ; `description?`: ``null`` \| `string` ; `id`: `number` ; `permalink`: `string` ; `previewGifAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `previewVideoAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `privacy`: [`PrivacyType`](../enums/PrivacyType.md) ; `quiltCols`: `number` ; `quiltRows`: `number` ; `quiltTileCount`: `number` ; `rgbdAssets?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `kind`: [`ImageAssetKind`](../enums/ImageAssetKind.md) ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `sourceImages`: { `__typename?`: ``"ImageAsset"`` ; `fileSize`: `number` ; `height`: `number` ; `id`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `thumbnail?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  } ; `title?`: ``null`` \| `string` ; `type`: [`HologramType`](../enums/HologramType.md) ; `user`: { `__typename?`: ``"User"`` ; `displayName`: `string` ; `id`: `number` ; `picture?`: ``null`` \| `string` ; `username`: `string`  }  })[]  } ; `username`: `string`  }\>

Fetch all the holograms for the currently logged in user

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `first` | `number` | `50` |

#### Returns

`Promise`<`undefined` \| ``null`` \| { `__typename?`: ``"User"`` ; `displayName`: `string` ; `holograms?`: ``null`` \| { `__typename?`: ``"UserHolograms_Connection"`` ; `nodes?`: ``null`` \| (``null`` \| { `__typename?`: ``"Hologram"`` ; `aspectRatio`: `number` ; `description?`: ``null`` \| `string` ; `id`: `number` ; `permalink`: `string` ; `previewGifAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `previewVideoAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `privacy`: [`PrivacyType`](../enums/PrivacyType.md) ; `quiltCols`: `number` ; `quiltRows`: `number` ; `quiltTileCount`: `number` ; `rgbdAssets?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `kind`: [`ImageAssetKind`](../enums/ImageAssetKind.md) ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `sourceImages`: { `__typename?`: ``"ImageAsset"`` ; `fileSize`: `number` ; `height`: `number` ; `id`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `thumbnail?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  } ; `title?`: ``null`` \| `string` ; `type`: [`HologramType`](../enums/HologramType.md) ; `user`: { `__typename?`: ``"User"`` ; `displayName`: `string` ; `id`: `number` ; `picture?`: ``null`` \| `string` ; `username`: `string`  }  })[]  } ; `username`: `string`  }\>

___

### playlist

▸ **playlist**(`id`, `limit?`): `Promise`<`undefined` \| ``null`` \| { `__typename?`: ``"Playlist"`` ; `description?`: ``null`` \| `string` ; `id`: `number` ; `items?`: ``null`` \| { `__typename?`: ``"PlaylistItems_Connection"`` ; `edges?`: ``null`` \| (``null`` \| { `__typename?`: ``"PlaylistItemEdge"`` ; `node?`: ``null`` \| { `__typename?`: ``"PlaylistItem"`` ; `hologram`: { `__typename?`: ``"Hologram"`` ; `aspectRatio`: `number` ; `description?`: ``null`` \| `string` ; `id`: `number` ; `permalink`: `string` ; `previewGifAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `previewVideoAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `privacy`: [`PrivacyType`](../enums/PrivacyType.md) ; `quiltCols`: `number` ; `quiltRows`: `number` ; `quiltTileCount`: `number` ; `rgbdAssets?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `kind`: [`ImageAssetKind`](../enums/ImageAssetKind.md) ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `sourceImages`: { `__typename?`: ``"ImageAsset"`` ; `fileSize`: `number` ; `height`: `number` ; `id`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `thumbnail?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  } ; `title?`: ``null`` \| `string` ; `type`: [`HologramType`](../enums/HologramType.md) ; `user`: { `__typename?`: ``"User"`` ; `displayName`: `string` ; `id`: `number` ; `picture?`: ``null`` \| `string` ; `username`: `string`  }  } ; `hologramId`: `number` ; `id`: `number` ; `position?`: ``null`` \| `number`  }  })[] ; `pageInfo`: { `__typename?`: ``"PageInfo"`` ; `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  } ; `totalCount?`: ``null`` \| `number`  } ; `permalink`: `string` ; `privacy`: [`PlaylistPrivacy`](../enums/PlaylistPrivacy.md) ; `thumbnail?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `id`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  } ; `title`: `string` ; `updatedAt`: `any`  }\>

Fetch a playlist

**`Id`**

The id of the playlist

**`Limit`**

Number of total holograms you want to load in

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `number` | `undefined` |
| `limit` | `number` | `50` |

#### Returns

`Promise`<`undefined` \| ``null`` \| { `__typename?`: ``"Playlist"`` ; `description?`: ``null`` \| `string` ; `id`: `number` ; `items?`: ``null`` \| { `__typename?`: ``"PlaylistItems_Connection"`` ; `edges?`: ``null`` \| (``null`` \| { `__typename?`: ``"PlaylistItemEdge"`` ; `node?`: ``null`` \| { `__typename?`: ``"PlaylistItem"`` ; `hologram`: { `__typename?`: ``"Hologram"`` ; `aspectRatio`: `number` ; `description?`: ``null`` \| `string` ; `id`: `number` ; `permalink`: `string` ; `previewGifAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `previewVideoAssets`: { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `privacy`: [`PrivacyType`](../enums/PrivacyType.md) ; `quiltCols`: `number` ; `quiltRows`: `number` ; `quiltTileCount`: `number` ; `rgbdAssets?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `kind`: [`ImageAssetKind`](../enums/ImageAssetKind.md) ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `sourceImages`: { `__typename?`: ``"ImageAsset"`` ; `fileSize`: `number` ; `height`: `number` ; `id`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  }[] ; `thumbnail?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  } ; `title?`: ``null`` \| `string` ; `type`: [`HologramType`](../enums/HologramType.md) ; `user`: { `__typename?`: ``"User"`` ; `displayName`: `string` ; `id`: `number` ; `picture?`: ``null`` \| `string` ; `username`: `string`  }  } ; `hologramId`: `number` ; `id`: `number` ; `position?`: ``null`` \| `number`  }  })[] ; `pageInfo`: { `__typename?`: ``"PageInfo"`` ; `endCursor?`: ``null`` \| `string` ; `hasNextPage`: `boolean` ; `hasPreviousPage`: `boolean` ; `startCursor?`: ``null`` \| `string`  } ; `totalCount?`: ``null`` \| `number`  } ; `permalink`: `string` ; `privacy`: [`PlaylistPrivacy`](../enums/PlaylistPrivacy.md) ; `thumbnail?`: ``null`` \| { `__typename?`: ``"ImageAsset"`` ; `height`: `number` ; `id`: `number` ; `type`: `string` ; `url`: `string` ; `width`: `number`  } ; `title`: `string` ; `updatedAt`: `any`  }\>

___

### request

▸ **request**<`T`, `V`\>(`options`): `Promise`<`T`\>

Make an autheticated request to the Blocks GraphQL API. To see the full list of available GraphQL queries and mutations, [visit the API sandbox](https://blocks.glass/api/graphql).

```tsx
await blocksClient.api({
	document: `query Me($first: Int) {
		me {
			holograms(first: $first) {
				nodes {
					id
					title
				}
			}
		}
	}`,
	variables: {
		first: 10
	}
})
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`GraphqlDocument`](../README.md#graphqldocument) |
| `V` | `Variables` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RequestOptions`<`V`, `T`\> |

#### Returns

`Promise`<`T`\>

___

### updateHologram

▸ **updateHologram**(`data`): `Promise`<{ `__typename?`: ``"Hologram"`` ; `id`: `number` ; `permalink`: `string` ; `title?`: ``null`` \| `string`  }\>

Update a hologram

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UpdateHologramInput`](../README.md#updateholograminput) |

#### Returns

`Promise`<{ `__typename?`: ``"Hologram"`` ; `id`: `number` ; `permalink`: `string` ; `title?`: ``null`` \| `string`  }\>

___

### uploadAndCreateQuiltHologram

▸ **uploadAndCreateQuiltHologram**(`file`, `args`): `Promise`<{ `__typename?`: ``"Hologram"`` ; `id`: `number` ; `permalink`: `string`  }\>

Upload a Looking Glass quilt and create a new hologram for this account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | The image file to upload |
| `args` | [`CreateQuiltHologramInputType`](../README.md#createquiltholograminputtype) | The input data to create the hologram |

#### Returns

`Promise`<{ `__typename?`: ``"Hologram"`` ; `id`: `number` ; `permalink`: `string`  }\>

___

### uploadAndCreateRgbdHologram

▸ **uploadAndCreateRgbdHologram**(`file`, `data`): `Promise`<{ `__typename?`: ``"Hologram"`` ; `id`: `number` ; `permalink`: `string`  }\>

Upload and convert a regular 2D image to a hologram for this account

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `File` |
| `data` | [`CreateHologramFromImageInput`](../README.md#createhologramfromimageinput) |

#### Returns

`Promise`<{ `__typename?`: ``"Hologram"`` ; `id`: `number` ; `permalink`: `string`  }\>
