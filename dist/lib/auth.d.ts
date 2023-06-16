import { Auth0Client, Auth0ClientOptions } from "@auth0/auth0-spa-js";
export declare type AuthClientOptions = Omit<Auth0ClientOptions, "domain"> & {
    domain?: string;
};
/**
 * Create a new Auth0Client with default Blocks API configuration
 * ```tsx
 * const authClient = createAuthClient({
 * 	clientId: "BLOCKS_CLIENT_ID_HERE",
 * })
 * ```
 */
export declare function createAuthClient(options: AuthClientOptions): Auth0Client;
/**
 * Redirects the user to the Auth0 login page. Use this to sign in users. When the user is redirected back to your app, you can use {@link validateSession} to validate the session.
 */
export declare function loginWithRedirect(authClient: Auth0Client, redirectUri: string): Promise<void>;
/**
 * Validates the session with Auth0 and returns the token if it exists.
 */
export declare function validateSession(authClient: Auth0Client): Promise<string | null>;
/** Signs the user out */
export declare function logout(authClient: Auth0Client, enableRedirect?: boolean): Promise<void>;
/** Returns if the user is logged in or not */
export declare function isAuthenticated(): boolean;
/**
 * Returns the token from the session. This is just fetching it from cache.
 * If you are wanting to validate a new sign in see {@link validateSession}
 */
export declare function getToken(): string;
