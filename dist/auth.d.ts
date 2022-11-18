export interface AuthInitArgs {
    /** The unique API client ID for this 3rd party application. This is given to you from the Blocks Staff */
    clientId: string;
    /** The default URL where Auth0 will redirect your browser to with the authentication result. It must be whitelisted in the "Allowed Callback URLs" field in your Auth0 Application's settings. If not provided here, it should be provided in the other methods that provide authentication.
     * @example http://127.0.0.1:3000
     */
    redirectUri: string;
    /**
     * Specify an alternative auth0 domain. Useful if you want to test on staging or development
     * @default blocks.us.auth0.com
     */
    domain?: string;
    /**
     * Specify an alternative API audience. Useful if you want to test on staging or development
     * @default https://blocks.glass
     */
    audience?: string;
}
export declare class BlocksSpaAuth {
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
    static init(args: AuthInitArgs): Promise<void>;
    static isAuthenticated(): boolean;
    static getJWT(): string;
}
