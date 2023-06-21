import { Auth0Client } from "@auth0/auth0-spa-js"
import { isAuthenticated, logout, validateSession } from "./main"

const LoginBtn = () => document.querySelector<HTMLAnchorElement>("[data-login]")
const LogoutBtn = () => document.querySelector<HTMLAnchorElement>("[data-logout]")
const LoggedInEls = () => document.querySelectorAll<HTMLElement>("[data-logged-in]")
const LoggedOutEls = () => document.querySelectorAll<HTMLElement>("[data-logged-out]")

function bindListeners(authClient: Auth0Client) {
	LoginBtn()?.addEventListener("click", async (ev: MouseEvent) => {
		const target = ev.target as HTMLDivElement
		const redirect = target.dataset.redirect ?? window.location.href
		await authClient?.loginWithRedirect({
			authorizationParams: {
				redirect_uri: redirect,
			},
		})
	})

	LogoutBtn()?.addEventListener("click", async () => {
		await logout(authClient, false)
		await updateUI()
	})
}

async function updateUI() {
	const loginBtn = LoginBtn()
	const logoutBtn = LogoutBtn()

	if (isAuthenticated()) {
		document.body.classList.remove("logged-out")
		document.body.classList.add("logged-in")

		if (loginBtn){
			loginBtn.style.display = 'none'
		}
		if (logoutBtn){
			logoutBtn.style.display = ''
		}

		LoggedInEls().forEach((el) => {
			el.style.display = ""
		})
		LoggedOutEls().forEach((el) => {
			el.style.display = "none"
		})
	} else {
		document.body.classList.remove("logged-in")
		document.body.classList.add("logged-out")

		if (loginBtn){
			loginBtn.style.display = ''
		}
		if (logoutBtn){
			logoutBtn.style.display = 'none'
		}

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

		await updateUI()
		await validateSession(authClient)
		await updateUI()
	}
}
