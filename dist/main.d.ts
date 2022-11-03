export declare class BlocksClient {
    private token;
    constructor(token: string);
    getHologram(id: number): Promise<import("./gql/graphql").FindHologramQuery>;
    getMyHolograms(first?: number): Promise<import("./gql/graphql").MyHologramsQuery>;
    private api;
}
