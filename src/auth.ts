import { Auth0Client } from "@auth0/auth0-spa-js"

const SESSION_KEY = "blocksToken"

let auth0Client: Auth0Client
let redirectUri: string

const LoginBtn = () => document.querySelector<HTMLAnchorElement>("[data-login]")
const LogoutBtn = () => document.querySelector<HTMLAnchorElement>("[data-logout]")
const LoggedInEls = () => document.querySelectorAll<HTMLElement>("[data-logged-in]")
const LoggedOutEls = () => document.querySelectorAll<HTMLElement>("[data-logged-out]")

function bindListeners() {
	LoginBtn()?.addEventListener("click", async () => {
		console.log("Logging in")
		await auth0Client?.loginWithRedirect({
			authorizationParams: {
				redirect_uri: redirectUri,
			},
		})
	})

	LogoutBtn()?.addEventListener("click", async () => {
		console.log("Logging out")
		sessionStorage.removeItem(SESSION_KEY)
		updateUI()
	})
}

async function checkSession() {
	// check for the code and state parameters
	const query = window.location.search

	// Searches URL ?code=asdf&state=asdf
	if (query.includes("code=") && query.includes("state=") && auth0Client) {
		// Process the login state
		try {
			await auth0Client.handleRedirectCallback()
		} catch (e) {
			console.error(e)
		}

		const isAuthenticated = await auth0Client.isAuthenticated()

		if (isAuthenticated) {
			// use full if you need to make requests using an auth0 token
			const token = await auth0Client.getTokenSilently()
			sessionStorage.setItem(SESSION_KEY, token)

			// Use replaceState to redirect the user away and remove the querystring parameters
			window.history.replaceState({}, document.title, window.location.pathname)
		}
	}
}

async function updateUI() {
	if (BlocksSpaAuth.isAuthenticated()) {
		LoginBtn()!.style.display = "none"
		LogoutBtn()!.style.display = ""

		LoggedInEls().forEach((el) => {
			el.style.display = ""
		})
		LoggedOutEls().forEach((el) => {
			el.style.display = "none"
		})
	} else {
		LoginBtn()!.style.display = ""
		LogoutBtn()!.style.display = "none"

		LoggedInEls().forEach((el) => {
			el.style.display = "none"
		})
		LoggedOutEls().forEach((el) => {
			el.style.display = ""
		})
	}
}

export interface AuthInitArgs {
	/** The unique API client ID for this 3rd party application. This is given to you from the Blocks Staff */
	clientId: string

	/** The default URL where Auth0 will redirect your browser to with the authentication result. It must be whitelisted in the "Allowed Callback URLs" field in your Auth0 Application's settings. If not provided here, it should be provided in the other methods that provide authentication.
	 * @example http://127.0.0.1:3000
	 */
	redirectUri: string

	/**
	 * Specify an alternative auth0 domain. Useful if you want to test on staging or development
	 * @default blocks.us.auth0.com
	 */
	domain?: string

	/**
	 * Specify an alternative API audience. Useful if you want to test on staging or development
	 * @default https://blocks.glass
	 */
	audience?: string
}

export class BlocksSpaAuth {
	/** BlocksSpaAuth used for single page applications. It will automatically bind click events to anchor tags with the following data attributes
	 * ```html
	 * <a href="#" data-login>Login</a>
	 * <a href="#" data-logout>Logout</a>
	 * ```
	 *
	 * It will also automatically hide or show elements with the following data attribute
	 * ```html
	 * <div data-logged-in>I am logged in</div>
	 * <div data-logged-out>I am logged out</div>
	 * ```
	 */
	static async init(args: AuthInitArgs) {
		bindListeners()

		redirectUri = args.redirectUri

		auth0Client = new Auth0Client({
			domain: args.domain || "blocks.us.auth0.com",
			clientId: args.clientId,
			authorizationParams: {
				audience: "https://blocks.glass",
			},
		})

		await checkSession()

		await updateUI()
	}

	static isAuthenticated(): boolean {
		return BlocksSpaAuth.getJWT() != ""
	}

	static getJWT(): string {
		return sessionStorage.getItem(SESSION_KEY) || ""
	}
}
