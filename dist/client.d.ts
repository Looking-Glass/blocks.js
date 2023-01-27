import { TypedQueryDocumentNode } from "graphql";
import { RequestDocument, RequestOptions, Variables } from "graphql-request";
import { CreateQuiltHologramInputType, FindPlaylistQuery } from "./gql/graphql";
export declare const HOLOGRAM_QUILT_IMAGE_FORMATS: string[];
export declare const HOLOGRAM_QUILT_IMAGE_MIMETYPES: string[];
export declare type BlocksClientArgs = {
    /** The JWT token that's used to authenticate with the Blocks API */
    token: string | null;
    /**
     * Change the API url if you're using a self-hosted version of Blocks
     * @default https://blocks.glass */
    apiUrl?: string;
};
declare type CreateHologramInputType = Omit<CreateQuiltHologramInputType, "width" | "height" | "imageUrl" | "fileSize">;
export declare class BlocksClient {
    private args;
    /**
     * Initialize the BlocksClient with a valid JWT token. See {@link validateSession} for how to get a token.
     * ```ts
     * const blocksClient = new BlocksClient({
     *   token: "BLOCKS_API_TOKEN_HERE"
     * });
     * ```
     */
    constructor(args: BlocksClientArgs);
    /** Get info about the currently signed in user. */
    me(): Promise<import("./gql/graphql").MeQuery>;
    /** Fetch an invididual hologram by id */
    hologram(id: number): Promise<import("./gql/graphql").FindHologramQuery>;
    /**
     * Fetch a playlist
     * @id The id of the playlist
     * @limit Number of total holograms you want to load in
     */
    playlist(id: number, limit?: number): Promise<FindPlaylistQuery>;
    /** Fetch all the holograms for the currently logged in user */
    myHolograms(first?: number): Promise<import("./gql/graphql").MyHologramsQuery>;
    /** Create a new hologram based upon an already uploaded S3 image URL */
    private createHologram;
    uploadAndCreateHologram(file: File, data: CreateHologramInputType): Promise<import("./gql/graphql").CreateQuiltHologramMutation>;
    private uploadImage;
    /** Load a image file into the page so we can get the dimensions */
    private getImageSizeFromFile;
    /** Get the form fields and target URL for direct POST uploading. */
    private getS3PresignedPost;
    /**
     * Make an autheticated request to the Blocks GraphQL API. To see the full list of available GraphQL queries and mutations, [visit the API sandbox](https://blocks.glass/api/graphql).
     *
     * ```tsx
     * await blocksClient.api({
     * 	document: `query Me($first: Int) {
     * 		me {
     *			holograms(first: $first) {
     *				nodes {
     *					id
     *					title
     * 				}
     *			}
     *		}
     *	}`,
     * 	variables: {
     * 		first: 10
     * 	}
     * })
     * ```
     */
    request<T = GraphqlDocument, V = Variables>(options: RequestOptions<V, T>): Promise<T>;
}
export declare type GraphqlDocument = RequestDocument | TypedQueryDocumentNode<any, Variables> | string;
export {};
