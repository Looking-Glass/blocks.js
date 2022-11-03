import { RequestOptions, Variables } from "graphql-request";
export declare class BlocksClient {
    private token;
    /** Initialize the BlocksClient with a valid JWT */
    constructor(token: string);
    /** Return info about the currently signed in user */
    me(): Promise<import("./gql/graphql").MeQuery>;
    /** Fetch a hologram */
    hologram(id: number): Promise<import("./gql/graphql").FindHologramQuery>;
    /** Fetch your public holograms */
    myHolograms(first?: number): Promise<import("./gql/graphql").MyHologramsQuery>;
    /** Call the GraphQL API directly  */
    api<T = any, V = Variables>(options: RequestOptions<V, T>): Promise<T>;
}
