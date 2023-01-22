# Looking Glass Blocks API

`blocks.js` a simple node library that allows you to interact with the [Blocks](https://blocks.glass/) GraphQL API. 
## Requirements
For any authenticated API calls, you will need a unique Client ID for your application. [Please fill out this form](https://forms.gle/MwhkzRMWRgky2JM36) if you are interested and we will reach out.
 
## Installation

Install the library!

```sh
npm install @lookingglass/blocks.js

# or install with yarn
yarn add @lookingglass/blocks.js
```

## Authentication
Blocks uses Auth0 under the hood for authentication. We provide some helpful wrappers around [`@auth0/auth0-spa-js`](https://github.com/auth0/auth0-spa-js) to make it easier to authenticate Blocks users. If you want to use another way to log a user in, you'll need to [reference the Auth0 docs](https://auth0.com/docs/authenticate/login/embedded-login).

### React setup
Here's an example approach of integrating user auth into a React app. First lets create an auth client that we can reuse throughout the app.

```ts
// lib/blocksAuthClient.ts
import { createAuthClient } from "@lookingglass/blocks.js";

export const blocksAuthClient = createAuthClient({
  // Be sure to set BLOCKS_CLIENT_ID in your .env file
  clientId: process.env.BLOCKS_CLIENT_ID ?? "",
})
```

Then let's create a hook to check on login status of a user using the `validateSession` method:

```ts
// hooks/useBlocksAuth.ts
import { useEffect, useState } from "react";
import { validateSession } from "@lookingglass/blocks.js";
import { blocksAuthClient } from "../lib/blocksAuthClient";

export default function useBlocksAuth() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    validateSession(blocksAuthClient).then(setToken);
  }, []);

  return {
    token,
    isLoggedIn: token !== null,
  };
}
```

Now let's create a login button for the user to click:

```tsx
// components/LoginButton.tsx
import { loginWithRedirect } from "@lookingglass/blocks.js";
import useBlocksAuth from "../hooks/useBlocksAuth";
import { blocksAuthClient } from "../lib/blocksAuthClient";

export default function LoginButton() {
  const { isLoggedIn, token } = useBlocksAuth();

  if (isLoggedIn) {
    return <>Logged in!</>;
  }

  async function onLoginClick() {
    // This will automatically redirect the user to sign in.
    // The BASE_URL is what Auth0 will redirect to 
    await loginWithRedirect(blocksAuthClient, process.env.BASE_URL);
  }

  return <button onClick={onLoginClick}>Login</button>;
}
```


### API calls
Now that we successfully can sign in a user, let's make an authenticated API call to the Blocks GraphQL API. 
```tsx
import Head from "next/head";
import LoginButton from "./components/LoginButton";
import useBlocksAuth from "./hooks/useBlocksAuth";
import { useEffect, useState } from "react";
import { BlocksClient } from "@lookingglass/blocks.js";

export default function Home() {
  const { isLoggedIn, token } = useBlocksAuth();
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    if (isLoggedIn && token) {
      const blocksClient = new BlocksClient({ token });

      // Fetch info about the logged-in user
      blocksClient.me().then((resp) => {
        console.log(resp.me);
        setName(resp.me?.displayName ?? null);
      });
    }
  }, [isLoggedIn]);

  return (
  <>
    <Head>
      <title>Blocks API App</title>
    </Head>
    <main>
      {name && <h1>Hello, {name}!</h1>}
      <LoginButton />
    </main>
  </>
  );
}

```

## Available API calls
```ts
// Get information about the currently logged-in user
me() 

// Lookup information about a specific hologram
hologram(id: number)

// Fetch a list of all your uploaded holograms
myHolograms(first: number) 

// Upload a quilt to Blocks 
uploadAndCreateHologram(file, data) 
```

blocks.js only supports a small handful of the GraphQL API calls. But you can still use this plugin to make a call to any GraphQL endpoint you'd like using the `api(...)` method.  

```tsx
await blocksClient.api({
  document: `query{ me { username } }`,
})
```

To see the full list of GraphQL queries and mutations, [visit our API  sandbox](https://blocks.glass/api/graphql).


## How to upload a hologram
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
## Contributions

PRs and feedback welcome.