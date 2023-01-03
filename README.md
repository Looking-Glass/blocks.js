# Looking Glass Blocks API

`blocks.js` a simple node library that allows you to interact with the [Blocks](https://blocks.glass/) GraphQL API. 
## Requirements
For any authenticated API calls, you will need a unique Client ID for your application. [Please fill out this form](https://forms.gle/MwhkzRMWRgky2JM36) if you are interested and we will reach out.
 
## Installation

Install the library. Since this is a private repo, you must use the direct git url.

```sh
npm install git+ssh://git@github.com:Looking-Glass/blocks.js.git

# or install with yarn
yarn add git+ssh://git@github.com:Looking-Glass/blocks.js.git
```

## Getting started

### Authentication
Right now, the only authentication method we support in this plugin is via a SPA (single page application) approach. If you want to use another way to log a user in, you'll need to [reference the Auth0 docs](https://auth0.com/docs/authenticate/login/embedded-login).

First you'll need to initialize `BlocksSpaAuth`:

```ts
// This must be called on every page load
BlocksSpaAuth.init({
  // The Client ID is provided by the Looking Glass team
  clientId: "[The Auth0 Client ID for this application]"
  // change to the base url for your project
  redirectUri: "http://localhost:3000" 
})
```

`BlocksSpaAuth` will automatically search your page and bind click events to anchor tags with the following data attributes, `data-login` and `data-logout`. For example:
```html
<a href="#" data-login>Login</a>
<a href="#" data-logout>Logout</a>
```

It will also automatically hide or show elements with the following data attribute:
```html
<!-- Will be visible when logged out -->
<div data-logged-in>I am logged in</div>

<!-- Will be visible when logged in -->
<div data-logged-out>I am logged out</div>
```

Once the user logs in, they will be redirected back to your redirect page and will be signed in.

### API calls
Now let's put it all together.
```ts
import { BlocksClient, BlocksSpaAuth } from "@lookingglass/blocks.js"

await BlocksSpaAuth.init({ ... })

// Once the user is signed in, this will return a valid JSON web token
// You can validate the JWT here: https://jwt.io/
const jwt = BlocksSpaAuth.getJWT()

if (jwt) {
  const blocksClient = new BlocksClient({ token: jwt })

  // Fetches info about the logged-in user 
  const resp = await blocksClient.me()

  console.log(resp.me.displayName)
}
```

### Uploading
First you'll need to add a file picker to your page for users to upload. Something like:
```tsx
/** You can get the list of all accepted mime types by importing HOLOGRAM_QUILT_IMAGE_MIMETYPES */
<input type="file" id="hologram" name="hologram" accept="image/png, image/jpeg" /> 
```

And here is a demo on how to automatically upload a file upon a user selecting a file.

```tsx
const filePicker = document.querySelector("#hologram") as HTMLFormElement

// Listen for when a user selects a file
filePicker.addEventListener("change", async (e) => {
  let files = Array.from<File>(filePicker.files)

  console.log("Uploading file", files[0])

  // Upload the first file selected
  const hologram = await blocksClient.uploadAndCreateQuiltHologram(files[0], {
    title: "My test hologram",
    isPublished: true,
    privacy: PrivacyType.Unlisted,
  })

  // If successful uploaded...
  if (hologram?.createQuiltHologram?.permalink) {
    console.log("Success!", { hologram })

    // Automatically open the newly uploaded hologram
    window.open(hologram.createQuiltHologram.permalink)
  }
})
```

### Uploading via a blob/texture
If you are generating textures, you can still use the same method `uploadAndCreateQuiltHologram`, you'll just need to instantiate the File from a blob. This is **untested** but something like:
```ts
const file = new File([blob], "filename.png");
```

## TODOs
blocks.js only supports a small handful of the GraphQL API calls. But you can still use this plugin to make a call to any GraphQL endpoint you'd like using `blocksClient.api(...)`. 

```tsx
await blocksClient.api({
  document: `query{ me { username } }`,
})
```

To see the full list of GraphQL queries and mutations, [visit our sandbox](https://blocks.glass/api/graphql).

## Contributions

PRs and feedback welcome.