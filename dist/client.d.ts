import { TypedQueryDocumentNode } from "graphql";
import { RequestDocument, RequestOptions, Variables } from "graphql-request";
import { CreateQuiltHologramInputType, UpdateHologramInput } from "./graphql/gql/types";
/**
 * @defaultValue ["png", "jpg", "jpeg", "webp", "bmp"]
 */
export declare const HOLOGRAM_QUILT_IMAGE_FORMATS: string[];
/**
 * @defaultValue ["image/png", "image/jpg", "image/jpeg", "image/webp", "image/bmp"]
 */
export declare const HOLOGRAM_QUILT_IMAGE_MIMETYPES: string[];
export declare type BlocksClientArgs = {
    /** The JWT token that's used to authenticate with the Blocks API */
    token: string | null;
    /**
     * Change the API url if you're using a self-hosted version of Blocks
     * @default https://blocks.glass */
    apiUrl?: string;
};
export declare class BlocksClient {
    private args;
    /**
     * Initialize the BlocksClient with a valid JWT token. See {@link validateSession} for how to get a token.
     * @example
     * ```ts
     * const blocksClient = new BlocksClient({
     *   token: "BLOCKS_API_TOKEN_HERE"
     * });
     * ```
     */
    constructor(args: BlocksClientArgs);
    /** Verify the current session is valid */
    verifySession(): Promise<import("./graphql/gql/types").VerifySessionQuery>;
    /** Fetch info about the currently signed in user. */
    me(): Promise<{
        __typename?: "User" | undefined;
        id: number;
        username: string;
        displayName: string;
        email?: string | null | undefined;
        picture?: string | null | undefined;
        createdAt: any;
    } | null | undefined>;
    /** Fetch an invididual hologram by id */
    hologram(id: number): Promise<{
        __typename?: "Hologram" | undefined;
        id: number;
        title?: string | null | undefined;
        description?: string | null | undefined;
        permalink: string;
        aspectRatio: number;
        quiltCols: number;
        quiltRows: number;
        quiltTileCount: number;
        privacy: import("./graphql/gql/types").PrivacyType;
        type: import("./graphql/gql/types").HologramType;
        thumbnail?: {
            __typename?: "ImageAsset" | undefined;
            url: string;
            width: number;
            height: number;
            type: string;
        } | null | undefined;
        user: {
            __typename?: "User" | undefined;
            id: number;
            username: string;
            displayName: string;
            picture?: string | null | undefined;
        };
        sourceImages: {
            __typename?: "ImageAsset" | undefined;
            id: number;
            url: string;
            width: number;
            height: number;
            type: string;
            fileSize: number;
        }[];
        previewGifAssets: {
            __typename?: "ImageAsset" | undefined;
            url: string;
            width: number;
            height: number;
            type: string;
        }[];
        previewVideoAssets: {
            __typename?: "ImageAsset" | undefined;
            url: string;
            width: number;
            height: number;
            type: string;
        }[];
        rgbdAssets?: {
            __typename?: "ImageAsset" | undefined;
            url: string;
            width: number;
            height: number;
            type: string;
            kind: import("./graphql/gql/types").ImageAssetKind;
        }[] | null | undefined;
    } | null | undefined>;
    /**
     * Fetch a playlist
     * @id The id of the playlist
     * @limit Number of total holograms you want to load in
     */
    playlist(id: number, limit?: number): Promise<{
        __typename?: "Playlist" | undefined;
        id: number;
        title: string;
        description?: string | null | undefined;
        permalink: string;
        privacy: import("./graphql/gql/types").PlaylistPrivacy;
        updatedAt: any;
        items?: {
            __typename?: "PlaylistItems_Connection" | undefined;
            totalCount?: number | null | undefined;
            pageInfo: {
                __typename?: "PageInfo" | undefined;
                hasNextPage: boolean;
                hasPreviousPage: boolean;
                startCursor?: string | null | undefined;
                endCursor?: string | null | undefined;
            };
            edges?: ({
                __typename?: "PlaylistItemEdge" | undefined;
                node?: {
                    __typename?: "PlaylistItem" | undefined;
                    id: number;
                    hologramId: number;
                    position?: number | null | undefined;
                    hologram: {
                        __typename?: "Hologram" | undefined;
                        id: number;
                        title?: string | null | undefined;
                        description?: string | null | undefined;
                        permalink: string;
                        aspectRatio: number;
                        quiltCols: number;
                        quiltRows: number;
                        quiltTileCount: number;
                        privacy: import("./graphql/gql/types").PrivacyType;
                        type: import("./graphql/gql/types").HologramType;
                        thumbnail?: {
                            __typename?: "ImageAsset" | undefined;
                            url: string;
                            width: number;
                            height: number;
                            type: string;
                        } | null | undefined;
                        user: {
                            __typename?: "User" | undefined;
                            id: number;
                            username: string;
                            displayName: string;
                            picture?: string | null | undefined;
                        };
                        sourceImages: {
                            __typename?: "ImageAsset" | undefined;
                            id: number;
                            url: string;
                            width: number;
                            height: number;
                            type: string;
                            fileSize: number;
                        }[];
                        previewGifAssets: {
                            __typename?: "ImageAsset" | undefined;
                            url: string;
                            width: number;
                            height: number;
                            type: string;
                        }[];
                        previewVideoAssets: {
                            __typename?: "ImageAsset" | undefined;
                            url: string;
                            width: number;
                            height: number;
                            type: string;
                        }[];
                        rgbdAssets?: {
                            __typename?: "ImageAsset" | undefined;
                            url: string;
                            width: number;
                            height: number;
                            type: string;
                            kind: import("./graphql/gql/types").ImageAssetKind;
                        }[] | null | undefined;
                    };
                } | null | undefined;
            } | null)[] | null | undefined;
        } | null | undefined;
        thumbnail?: {
            __typename?: "ImageAsset" | undefined;
            id: number;
            url: string;
            width: number;
            height: number;
            type: string;
        } | null | undefined;
    } | null | undefined>;
    /** Fetch all the holograms for the currently logged in user */
    myHolograms(first?: number): Promise<{
        __typename?: "User" | undefined;
        username: string;
        displayName: string;
        holograms?: {
            __typename?: "UserHolograms_Connection" | undefined;
            nodes?: ({
                __typename?: "Hologram" | undefined;
                id: number;
                title?: string | null | undefined;
                description?: string | null | undefined;
                permalink: string;
                aspectRatio: number;
                quiltCols: number;
                quiltRows: number;
                quiltTileCount: number;
                privacy: import("./graphql/gql/types").PrivacyType;
                type: import("./graphql/gql/types").HologramType;
                thumbnail?: {
                    __typename?: "ImageAsset" | undefined;
                    url: string;
                    width: number;
                    height: number;
                    type: string;
                } | null | undefined;
                user: {
                    __typename?: "User" | undefined;
                    id: number;
                    username: string;
                    displayName: string;
                    picture?: string | null | undefined;
                };
                sourceImages: {
                    __typename?: "ImageAsset" | undefined;
                    id: number;
                    url: string;
                    width: number;
                    height: number;
                    type: string;
                    fileSize: number;
                }[];
                previewGifAssets: {
                    __typename?: "ImageAsset" | undefined;
                    url: string;
                    width: number;
                    height: number;
                    type: string;
                }[];
                previewVideoAssets: {
                    __typename?: "ImageAsset" | undefined;
                    url: string;
                    width: number;
                    height: number;
                    type: string;
                }[];
                rgbdAssets?: {
                    __typename?: "ImageAsset" | undefined;
                    url: string;
                    width: number;
                    height: number;
                    type: string;
                    kind: import("./graphql/gql/types").ImageAssetKind;
                }[] | null | undefined;
            } | null)[] | null | undefined;
        } | null | undefined;
    } | null | undefined>;
    /**
     * Upload a Looking Glass quilt and create a new hologram for this account
     * @param file The image file to upload
     * @param args The input data to create the hologram
     */
    uploadAndCreateQuiltHologram(file: File, data: Omit<CreateQuiltHologramInputType, "imageUrl">): Promise<{
        __typename?: "Hologram" | undefined;
        id: number;
        permalink: string;
    }>;
    /** Upload and convert a regular 2D image to a hologram for this account */
    uploadAndCreateRgbdHologram(file: File, data: Omit<CreateQuiltHologramInputType, "imageUrl">): Promise<{
        __typename?: "Hologram" | undefined;
        id: number;
        permalink: string;
    }>;
    /** Update a hologram */
    updateHologram(data: UpdateHologramInput): Promise<{
        __typename?: "Hologram" | undefined;
        id: number;
        title?: string | null | undefined;
        permalink: string;
    }>;
    /** Delete a hologram */
    deleteHologram(hologramId: number): Promise<{
        __typename?: "Hologram" | undefined;
        id: number;
    }>;
    private uploadImage;
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
