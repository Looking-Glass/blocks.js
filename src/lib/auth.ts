import { Auth0Client, Auth0ClientOptions } from "@auth0/auth0-spa-js"

export const SESSION_KEY = "blocksToken"

export type AuthClientOptions = Omit<Auth0ClientOptions, "domain"> & {
	domain?: string
}

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

export async function loginWithRedirect(authClient: Auth0Client, redirectUri: string = "/") {
	return await authClient?.loginWithRedirect({
		authorizationParams: {
			redirect_uri: redirectUri,
		},
	})
}

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
		return getJWT()
	}

	return null
}

export function isAuthenticated(): boolean {
	return getJWT() != ""
}

export function getJWT(): string {
	return sessionStorage.getItem(SESSION_KEY) || ""
}
