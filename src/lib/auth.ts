import { Auth0Client, Auth0ClientOptions } from "@auth0/auth0-spa-js"

/** @ignore */
export const SESSION_KEY = "blocksToken"

export type AuthClientOptions = Omit<Auth0ClientOptions, "domain"> & {
	domain?: string
}

/**
 * Create a new Auth0Client with default Blocks API configuration
 * ```tsx
 * const authClient = createAuthClient({
 * 	clientId: "BLOCKS_CLIENT_ID_HERE",
 * })
 * ```
 */
export function createAuthClient(options: AuthClientOptions) {
	return new Auth0Client({
		...options,
		domain: options.domain ?? "blocks.us.auth0.com",
		clientId: options.clientId ?? "",
		authorizationParams: {
			audience: options.authorizationParams?.audience ?? "https://blocks.glass",
		},
	})
}

/**
 *Redirects the user to the Auth0 login page. Use this to sign in users. When the user is redirected back to your app, you can use {@link validateSession} to validate the session.
 */
export async function loginWithRedirect(authClient: Auth0Client, redirectUri: string) {
	return await authClient?.loginWithRedirect({
		authorizationParams: {
			redirect_uri: redirectUri,
		},
	})
}

/**
 * Validates the session with Auth0 and returns the token if it exists.
 */
export async function validateSession(authClient: Auth0Client): Promise<string | null> {
	if (typeof window === "undefined") {
		console.error("Blocks validateSession should only be called client side")
		return null
	}

	// check for the code and state parameters
	const query = window.location.search

	// Searches URL ?code=asdf&state=asdf
	if (query.includes("code=") && query.includes("state=")) {
		// Process the login state
		try {
			await authClient.handleRedirectCallback()
		} catch (e) {
			// console.error(e)
		}

		const isAuthenticated = await authClient.isAuthenticated()

		if (isAuthenticated) {
			// use full if you need to make requests using an auth0 token
			const token = await authClient.getTokenSilently()
			sessionStorage.setItem(SESSION_KEY, token)

			// Use replaceState to redirect the user away and remove the querystring parameters
			window.history.replaceState({}, document.title, window.location.pathname)

			return token
		}
	} else if (isAuthenticated()) {
		return getToken()
	}

	return null
}

/** Returns if the user is logged in or not */
export function isAuthenticated(): boolean {
	return getToken() != ""
}

/** Returns the token from the session. This is just fetching it from cache.
 * If you are wanting to validate a new sign in see {@link validateSession}
 */
export function getToken(): string {
	return sessionStorage.getItem(SESSION_KEY) || ""
}
