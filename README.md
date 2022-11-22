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
import { BlocksClient, BlocksSpaAuth } from "@lookingglass/blocks.js"

await BlocksSpaAuth.init({ ... })

// Once the user is signed in, this will return a valid JSON web token
const jwt = BlocksSpaAuth.getJWT()

if (jwt) {
  const blocksClient = new BlocksClient({ token: jwt })
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

filePicker.addEventListener("change", async (e) => {
  let files = Array.from<File>(filePicker.files)

  console.log("Uploading file", files[0])

  const hologram = await blocksClient.uploadAndCreateQuiltHologram(files[0], {
    title: "My test hologram",
    isPublished: true,
    privacy: PrivacyType.Unlisted,
  })

  if (hologram.createQuiltHologram.permalink) {
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

## Resources

- [API docs](https://gist.github.com/caseypugh/ae9b48e9f46bb398074ee98202cf58b3)
- [GraphQL API Sandbox](https://blocks.glass/api/graphql)