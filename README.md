# Looking Glass Blocks API

`blocks.js` a simple node library that allows you to interact with the [Blocks](https://blocks.glass/) GraphQL API. 

## Installation

Install the library. Since this is a private repo, you must use the direct git url.

```sh
npm install git+ssh://git@github.com:Looking-Glass/blocks.js.git

# or install with yarn
yarn add git+ssh://git@github.com:Looking-Glass/blocks.js.git
```

## Getting started

```ts
const jwt = // will document this later..

const blocksClient = new BlocksClient(jwt)
const resp = await blocksClient.me()
console.log(resp.me.displayName)

```