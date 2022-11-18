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

### Authentication
Right now, the only built-in authentication method is via a SPA (single page application) approach. If you want to use another way to log a user in, you'll need to reference the Auth0 docs.

Here is how `BlocksSpaAuth` works:

```ts
// This must be called on every page load
BlocksSpaAuth.init({
  clientId: "[The Auth0 Client ID for this application]"
  // change to the base url for your project
  redirectUri: "http://localhost:3000" 
})
```

`BlocksSpaAuth` will automatically bind click events to anchor tags with the following data attributes:
```html
<a href="#" data-login>Login</a>
<a href="#" data-logout>Logout</a>
```

It will also automatically hide or show elements with the following data attribute:
```html
<div data-logged-in>I am logged in</div>
<div data-logged-out>I am logged out</div>
```

Once the user logs in, they will be redirected back to your redirect page and will be signed in.

### API calls
Now let's put it all together.
```ts
await BlocksSpaAuth.init({ ... })

// Once the user is signed in, this will return a valid JSON web token
const jwt = BlocksSpaAuth.getJWT()

if (jwt) {
  const blocksClient = new BlocksClient(jwt)
  const resp = await blocksClient.me()

  console.log(resp.me.displayName)
}
```