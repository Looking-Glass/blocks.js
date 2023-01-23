[@lookingglass/blocks.js](../README.md) / BlocksSpaAuth

# Class: BlocksSpaAuth

BlocksSpaAuth used for vanilla/non-react applications as a way to make it quick to integrate auth. It will automatically bind click events to anchor tags with the following data attributes

**`Deprecated`**

## Table of contents

### Methods

- [init](BlocksSpaAuth.md#init)

## Methods

### init

▸ `Static` **init**(`authClient`): `Promise`<`void`\>

```html
<a href="#" data-login>Login</a>
<a href="#" data-logout>Logout</a>
```

It will also automatically hide or show elements with the following data attribute
```html
<div data-logged-in>I am logged in</div>
<div data-logged-out>I am logged out</div>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `authClient` | `Auth0Client` |

#### Returns

`Promise`<`void`\>
