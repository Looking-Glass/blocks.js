import { Auth0Client, Auth0ClientOptions } from "@auth0/auth0-spa-js"

export type AuthClientOptions = Omit<Auth0ClientOptions, "domain"> & {
	domain?: string
}

let USER_JWT = ""

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
		sessionCheckExpiryDays: 30,
	})
}

/**
 * Redirects the user to the Auth0 login page. Use this to sign in users. When the user is redirected back to your app, you can use {@link validateSession} to validate the session.
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
			USER_JWT = await authClient.getTokenSilently()

			// Use replaceState to redirect the user away and remove the querystring parameters
			window.history.replaceState({}, document.title, window.location.pathname)

			return USER_JWT
		}
	} else {
		try {
			USER_JWT = await authClient.getTokenSilently()
		} catch (e) {
			// console.log("User not signed in")
			USER_JWT = ""
		}

		return getToken()
	}

	return null
}

/** Signs the user out */
export async function logout(authClient: Auth0Client, enableRedirect: boolean = true) {
	await authClient.logout({
		onRedirect: enableRedirect ? undefined : async (url: string) => {},
	})
}

export async function logoutWithRedirect(authClient: Auth0Client, redirectURL: string){
	await authClient.logout({logoutParams: {returnTo: redirectURL}})
}

/** Returns if the user is logged in or not */
export function isAuthenticated(): boolean {
	return getToken() != ""
}

/**
 * Returns the token from the session. This is just fetching it from cache.
 * If you are wanting to validate a new sign in see {@link validateSession}
 */
export function getToken(): string {
	return USER_JWT
}

function setCookie(name: string, value: string, days: number): void {
	const date = new Date()
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
	const expires = "; expires=" + date.toUTCString()
	document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

function getCookie(name: string): string {
	const nameEQ = name + "="
	const ca = document.cookie.split(";")
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i]
		while (c.charAt(0) === " ") c = c.substring(1, c.length)
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
	}
	return ""
}
