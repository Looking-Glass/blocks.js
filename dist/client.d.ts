import { RequestOptions, Variables } from "graphql-request";
import { CreateQuiltHologramInputType, FindPlaylistQuery } from "./gql/graphql";
export declare const HOLOGRAM_QUILT_IMAGE_FORMATS: string[];
export declare const HOLOGRAM_QUILT_IMAGE_MIMETYPES: string[];
export interface BlocksClientArgs {
    token: string;
    /**
     * @default https://blocks.glass */
    apiUrl?: string;
    /** @default https://blocks.glass/api/graphql */
    graphqlApiUrl?: string;
}
export declare type UploadAndCreateHologramArgs = Omit<CreateQuiltHologramInputType, "width" | "height" | "imageUrl" | "fileSize">;
export declare class BlocksClient {
    private auth;
    private args;
    /** Initialize the BlocksClient with a valid JWT */
    constructor(args: BlocksClientArgs);
    /** Return info about the currently signed in user */
    me(): Promise<import("./gql/graphql").MeQuery>;
    /** Fetch a hologram */
    hologram(id: number): Promise<import("./gql/graphql").FindHologramQuery>;
    /** Fetch a playlist
     * @id The id of the playlist
     * @limit Number of total holograms you want to load in
     */
    playlist(id: number, limit?: number): Promise<FindPlaylistQuery>;
    /** Fetch your public holograms */
    myHolograms(first?: number): Promise<import("./gql/graphql").MyHologramsQuery>;
    /** Create a new hologram based upon an already uploaded S3 image URL */
    createQuiltHologram(data: CreateQuiltHologramInputType): Promise<import("./gql/graphql").CreateQuiltHologramMutation>;
    uploadAndCreateQuiltHologram(file: File, data: UploadAndCreateHologramArgs): Promise<import("./gql/graphql").CreateQuiltHologramMutation>;
    uploadImage(file: File): Promise<string>;
    /** Load a image file into the page so we can get the dimensions */
    private getImageSizeFromFile;
    /** Get the form fields and target URL for direct POST uploading. */
    private getS3PresignedPost;
    /** Call the GraphQL API directly  */
    api<T = any, V = Variables>(options: RequestOptions<V, T>): Promise<T>;
}
