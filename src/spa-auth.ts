import { Auth0Client } from "@auth0/auth0-spa-js"
import { SESSION_KEY, createAuthClient, isAuthenticated, validateSession } from "./main"

let redirectUri: string

const LoginBtn = () => document.querySelector<HTMLAnchorElement>("[data-login]")
const LogoutBtn = () => document.querySelector<HTMLAnchorElement>("[data-logout]")
const LoggedInEls = () => document.querySelectorAll<HTMLElement>("[data-logged-in]")
const LoggedOutEls = () => document.querySelectorAll<HTMLElement>("[data-logged-out]")

function bindListeners(authClient: Auth0Client) {
	LoginBtn()?.addEventListener("click", async () => {
		console.log("Logging in")
		await authClient?.loginWithRedirect({
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

async function updateUI() {
	if (isAuthenticated()) {
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

/**
 * BlocksSpaAuth used for vanilla/non-react applications as a way to make it quick to integrate auth. It will automatically bind click events to anchor tags with the following data attributes
 * @deprecated
 */
export class BlocksSpaAuth {
	/** @ignore */
	constructor() {}

	/**
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
	static async init(authClient: Auth0Client) {
		bindListeners(authClient)

		await validateSession(authClient)

		await updateUI()
	}
}
