import { Auth0Client } from "@auth0/auth0-spa-js";
/**
 * BlocksSpaAuth used for vanilla/non-react applications as a way to make it quick to integrate auth. It will automatically bind click events to anchor tags with the following data attributes
 * @deprecated
 */
export declare class BlocksSpaAuth {
    /** @ignore */
    constructor();
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
    static init(authClient: Auth0Client): Promise<void>;
}
