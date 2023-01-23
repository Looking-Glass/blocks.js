[@lookingglass/blocks.js](../README.md) / BlocksClient

# Class: BlocksClient

## Table of contents

### Constructors

- [constructor](BlocksClient.md#constructor)

### Methods

- [hologram](BlocksClient.md#hologram)
- [me](BlocksClient.md#me)
- [myHolograms](BlocksClient.md#myholograms)
- [playlist](BlocksClient.md#playlist)
- [request](BlocksClient.md#request)
- [uploadAndCreateHologram](BlocksClient.md#uploadandcreatehologram)

## Constructors

### constructor

• **new BlocksClient**(`args`)

Initialize the BlocksClient with a valid JWT token. See [validateSession](../README.md#validatesession) for how to get a token.
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

### hologram

▸ **hologram**(`id`): `Promise`<`FindHologramQuery`\>

Fetch an invididual hologram by id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`FindHologramQuery`\>

___

### me

▸ **me**(): `Promise`<`MeQuery`\>

Get info about the currently signed in user.

#### Returns

`Promise`<`MeQuery`\>

___

### myHolograms

▸ **myHolograms**(`first?`): `Promise`<`MyHologramsQuery`\>

Fetch all the holograms for the currently logged in user

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `first` | `number` | `50` |

#### Returns

`Promise`<`MyHologramsQuery`\>

___

### playlist

▸ **playlist**(`id`, `limit?`): `Promise`<`FindPlaylistQuery`\>

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

`Promise`<`FindPlaylistQuery`\>

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

### uploadAndCreateHologram

▸ **uploadAndCreateHologram**(`file`, `data`): `Promise`<`CreateQuiltHologramMutation`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `File` |
| `data` | `CreateHologramInputType` |

#### Returns

`Promise`<`CreateQuiltHologramMutation`\>
