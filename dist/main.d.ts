import { RequestOptions, Variables } from "graphql-request";
import { FindHologramQuery } from "./gql/graphql";
export declare class BlocksClient {
    private token;
    /** Initialize the BlocksClient with a valid JWT */
    constructor(token: string);
    /** Return info about the currently signed in user */
    me(): Promise<import("./gql/graphql").MeQuery>;
    /** Fetch a hologram */
    hologram(id: number): Promise<FindHologramQuery>;
    /** Fetch a playlist
     * @id The id of the playlist
     * @limit Number of total holograms you want to load in
     */
    playlist(id: number, limit?: number): Promise<import("./gql/graphql").FindPlaylistQuery>;
    /** Fetch your public holograms */
    myHolograms(first?: number): Promise<import("./gql/graphql").MyHologramsQuery>;
    /** Call the GraphQL API directly  */
    api<T = any, V = Variables>(options: RequestOptions<V, T>): Promise<T>;
}
