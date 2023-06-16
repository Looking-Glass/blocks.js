import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export declare type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
export declare type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: {
        input: string | number;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    Date: {
        input: any;
        output: any;
    };
    DateTime: {
        input: any;
        output: any;
    };
    Time: {
        input: any;
        output: any;
    };
};
export declare type BatchPayload = {
    __typename?: 'BatchPayload';
    count?: Maybe<Scalars['Int']['output']>;
};
/** The input arguments for the createHologram mutation. */
export declare type CreateHologramFromImageInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    /** The public URL of the image to be converted to RGBD. */
    imageUrl: Scalars['String']['input'];
    privacy?: InputMaybe<PrivacyType>;
    title?: InputMaybe<Scalars['String']['input']>;
};
/** The input arguments for the createQuiltHologram mutation. */
export declare type CreateQuiltHologramInputType = {
    aspectRatio?: InputMaybe<Scalars['Float']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    /** The URL of the image */
    imageUrl: Scalars['String']['input'];
    isPublished?: InputMaybe<Scalars['Boolean']['input']>;
    /** Restricted */
    privacy?: InputMaybe<PrivacyType>;
    quiltCols?: InputMaybe<Scalars['Int']['input']>;
    quiltRows?: InputMaybe<Scalars['Int']['input']>;
    quiltTileCount?: InputMaybe<Scalars['Int']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};
export declare type Hologram = {
    __typename?: 'Hologram';
    /** The aspect ratio for a quilt hologram. */
    aspectRatio: Scalars['Float']['output'];
    createdAt: Scalars['DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    /** HTML embed code for this hologram. */
    embedCode: Scalars['String']['output'];
    id: Scalars['Int']['output'];
    isPublished: Scalars['Boolean']['output'];
    /** The software used to create and upload this hologram. */
    madeWith?: Maybe<Scalars['String']['output']>;
    /** The URL path for this hologram. */
    path: Scalars['String']['output'];
    /** The full permalink URL for this hologram. */
    permalink: Scalars['String']['output'];
    /** Animated GIF previews */
    previewGifAssets: Array<ImageAsset>;
    /** Animated MP4 previews */
    previewVideoAssets: Array<ImageAsset>;
    /** Restricted access */
    privacy: PrivacyType;
    /** Get all the individual quilt angles (Restricted) */
    quiltAngleImages: Array<ImageAsset>;
    /** The total columns for a quilt hologram. */
    quiltCols: Scalars['Int']['output'];
    /** The total rows for a quilt hologram. */
    quiltRows: Scalars['Int']['output'];
    /** The total individual view count for a quilt hologram. */
    quiltTileCount: Scalars['Int']['output'];
    /** RGBD assets */
    rgbdAssets?: Maybe<Array<ImageAsset>>;
    /** The amount of depth an RGBD Hologram has. */
    rgbdDepthiness: Scalars['Float']['output'];
    /** The position of the RGBD hologram in Z space. */
    rgbdFocus: Scalars['Float']['output'];
    /** Controls how the stretched portions of the RGBD hologram are handled. */
    rgbdStretch: Scalars['Float']['output'];
    /** The amount the RGBD hologram is zoomed in by. */
    rgbdZoom: Scalars['Float']['output'];
    /** The original source image that was uploaded to create this hologram. A hologram can have multiple source images, but the most recent one is the one that is used to generate the hologram. */
    sourceImages: Array<ImageAsset>;
    /** Thumbnail preview */
    thumbnail?: Maybe<ImageAsset>;
    /** Thumbnail previews in a range of sizes */
    thumbnails: Array<ImageAsset>;
    title?: Maybe<Scalars['String']['output']>;
    /** The total number of times this hologram has been viewed */
    totalViews: Scalars['Int']['output'];
    type: HologramType;
    updatedAt: Scalars['DateTime']['output'];
    user: User;
    userId: Scalars['Int']['output'];
    /** Restricted access */
    uuid?: Maybe<Scalars['String']['output']>;
};
export declare type HologramQuiltAngleImagesArgs = {
    width?: InputMaybe<Scalars['Int']['input']>;
};
export declare type HologramThumbnailArgs = {
    width?: InputMaybe<Scalars['Int']['input']>;
};
export declare type HologramConnection = {
    __typename?: 'HologramConnection';
    /** https://relay.dev/graphql/connections.htm#sec-Edge-Types */
    edges?: Maybe<Array<Maybe<HologramEdge>>>;
    /** Flattened list of Hologram type */
    nodes?: Maybe<Array<Maybe<Hologram>>>;
    /** https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
    pageInfo: PageInfo;
};
export declare type HologramEdge = {
    __typename?: 'HologramEdge';
    /** https://relay.dev/graphql/connections.htm#sec-Cursor */
    cursor: Scalars['String']['output'];
    /** https://relay.dev/graphql/connections.htm#sec-Node */
    node?: Maybe<Hologram>;
};
export declare enum HologramType {
    Quilt = "QUILT",
    Rgbd = "RGBD"
}
export declare type ImageAsset = {
    __typename?: 'ImageAsset';
    /** File size in bytes */
    fileSize: Scalars['Int']['output'];
    height: Scalars['Int']['output'];
    id: Scalars['Int']['output'];
    /** Defines what kind of asset this is (e.g. preview animation, source, etc.) */
    kind: ImageAssetKind;
    /** File's content type */
    type: Scalars['String']['output'];
    /** Location of the asset */
    url: Scalars['String']['output'];
    /** A hash of the inputs used to generate this preview */
    versionHash?: Maybe<Scalars['String']['output']>;
    width: Scalars['Int']['output'];
};
export declare enum ImageAssetKind {
    Depth = "DEPTH",
    ImagesetVideo = "IMAGESET_VIDEO",
    None = "NONE",
    Preview = "PREVIEW",
    Rgbd = "RGBD",
    Source = "SOURCE"
}
export declare type Mutation = {
    __typename?: 'Mutation';
    /** Create a hologram based upon a given image URL. Blocks will automatically generate a depth map. */
    createHologramFromImage: Hologram;
    /** Attach a new asset to a Hologram (Restricted) */
    createImageAsset: ImageAsset;
    createPlaylist: Playlist;
    /** Add a hologram to a playlist. */
    createPlaylistItem: PlaylistItem;
    /** Add one or more holograms to a playlist. */
    createPlaylistItems: BatchPayload;
    /** After uploading an image to Blocks, use this mutation to create a quilt hologram based on the source image. Note: Please use the `data` to pass in all the input data. All the other args are now deprecated. */
    createQuiltHologram: Hologram;
    /** Delete a hologram. The hologram must be owned by the same user. */
    deleteHologram: Hologram;
    /** Bulk delete one or more holograms. All holograms must be owned by the same user. */
    deleteHolograms: BatchPayload;
    deletePlaylist: Playlist;
    /** Remove a single hologram from a playlist */
    deletePlaylistItem: BatchPayload;
    /** Remove one or more holograms from a playlist */
    deletePlaylistItems: BatchPayload;
    replaceQuiltHologram: Hologram;
    updateHologram: Hologram;
    /** Update a playlist's metadata */
    updatePlaylist: Playlist;
    /** Update an item in a playlist */
    updatePlaylistItem: PlaylistItem;
    /** @deprecated Please use updateHologram instead */
    updateQuiltHologram: Hologram;
    /** Update the currently logged-in user's settings. */
    updateUser: User;
};
export declare type MutationCreateHologramFromImageArgs = {
    data: CreateHologramFromImageInput;
};
export declare type MutationCreateImageAssetArgs = {
    fileSize: Scalars['Int']['input'];
    height: Scalars['Int']['input'];
    hologramId: Scalars['Int']['input'];
    type: Scalars['String']['input'];
    url: Scalars['String']['input'];
    versionHash?: InputMaybe<Scalars['String']['input']>;
    width: Scalars['Int']['input'];
};
export declare type MutationCreatePlaylistArgs = {
    description?: InputMaybe<Scalars['String']['input']>;
    isPublished?: InputMaybe<Scalars['Boolean']['input']>;
    privacy?: InputMaybe<PlaylistPrivacy>;
    title: Scalars['String']['input'];
};
export declare type MutationCreatePlaylistItemArgs = {
    hologramId: Scalars['Int']['input'];
    playlistId: Scalars['Int']['input'];
    position?: InputMaybe<Scalars['Int']['input']>;
};
export declare type MutationCreatePlaylistItemsArgs = {
    hologramIds: Array<InputMaybe<Scalars['Int']['input']>>;
    playlistId: Scalars['Int']['input'];
};
export declare type MutationCreateQuiltHologramArgs = {
    aspectRatio?: InputMaybe<Scalars['Float']['input']>;
    data?: InputMaybe<CreateQuiltHologramInputType>;
    description?: InputMaybe<Scalars['String']['input']>;
    fileSize?: InputMaybe<Scalars['Int']['input']>;
    height?: InputMaybe<Scalars['Int']['input']>;
    imageUrl?: InputMaybe<Scalars['String']['input']>;
    isPublished?: InputMaybe<Scalars['Boolean']['input']>;
    privacy?: InputMaybe<PrivacyType>;
    quiltCols?: InputMaybe<Scalars['Int']['input']>;
    quiltRows?: InputMaybe<Scalars['Int']['input']>;
    quiltTileCount?: InputMaybe<Scalars['Int']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<HologramType>;
    width?: InputMaybe<Scalars['Int']['input']>;
};
export declare type MutationDeleteHologramArgs = {
    id: Scalars['Int']['input'];
};
export declare type MutationDeleteHologramsArgs = {
    ids: Array<InputMaybe<Scalars['Int']['input']>>;
};
export declare type MutationDeletePlaylistArgs = {
    id: Scalars['Int']['input'];
};
export declare type MutationDeletePlaylistItemArgs = {
    id: Scalars['Int']['input'];
    playlistId: Scalars['Int']['input'];
};
export declare type MutationDeletePlaylistItemsArgs = {
    ids: Array<InputMaybe<Scalars['Int']['input']>>;
    playlistId: Scalars['Int']['input'];
};
export declare type MutationReplaceQuiltHologramArgs = {
    id: Scalars['Int']['input'];
    imageUrl: Scalars['String']['input'];
};
export declare type MutationUpdateHologramArgs = {
    data?: InputMaybe<UpdateHologramInput>;
};
export declare type MutationUpdatePlaylistArgs = {
    description?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
    privacy?: InputMaybe<PlaylistPrivacy>;
    title?: InputMaybe<Scalars['String']['input']>;
};
export declare type MutationUpdatePlaylistItemArgs = {
    id: Scalars['Int']['input'];
    position: Scalars['Int']['input'];
};
export declare type MutationUpdateQuiltHologramArgs = {
    aspectRatio?: InputMaybe<Scalars['Float']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
    isPublished?: InputMaybe<Scalars['Boolean']['input']>;
    privacy?: InputMaybe<PrivacyType>;
    quiltCols?: InputMaybe<Scalars['Int']['input']>;
    quiltRows?: InputMaybe<Scalars['Int']['input']>;
    quiltTileCount?: InputMaybe<Scalars['Int']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};
export declare type MutationUpdateUserArgs = {
    data?: InputMaybe<UpdateUserInputType>;
};
/** PageInfo cursor, as defined in https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
export declare type PageInfo = {
    __typename?: 'PageInfo';
    /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
    hasNextPage: Scalars['Boolean']['output'];
    /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
    hasPreviousPage: Scalars['Boolean']['output'];
    /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
    startCursor?: Maybe<Scalars['String']['output']>;
};
/** A playlist contains a collection of holograms. */
export declare type Playlist = {
    __typename?: 'Playlist';
    createdAt: Scalars['DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    /** A curated hologram to represent this playlist. If 'featuredHologramId' is blank, this returns the first hologram in the playlist */
    featuredHologram?: Maybe<Hologram>;
    featuredHologramId?: Maybe<Scalars['Int']['output']>;
    id: Scalars['Int']['output'];
    isPublished: Scalars['Boolean']['output'];
    /** Items (holograms) in this playlist. Only public holograms are returned */
    items?: Maybe<PlaylistItems_Connection>;
    path: Scalars['String']['output'];
    permalink: Scalars['String']['output'];
    /** The privacy status of this playlist. (Restricted) */
    privacy: PlaylistPrivacy;
    thumbnail?: Maybe<ImageAsset>;
    title: Scalars['String']['output'];
    updatedAt: Scalars['DateTime']['output'];
    /** The owner of this playlist */
    user: User;
    /** Use this instead of user if you only need the user's ID */
    userId: Scalars['Int']['output'];
    /** (Restricted) */
    uuid?: Maybe<Scalars['String']['output']>;
};
/** A playlist contains a collection of holograms. */
export declare type PlaylistItemsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    discover?: InputMaybe<Scalars['Boolean']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
};
/** A playlist contains a collection of holograms. */
export declare type PlaylistThumbnailArgs = {
    width?: InputMaybe<Scalars['Int']['input']>;
};
export declare type PlaylistEdge = {
    __typename?: 'PlaylistEdge';
    /** https://relay.dev/graphql/connections.htm#sec-Cursor */
    cursor: Scalars['String']['output'];
    /** https://relay.dev/graphql/connections.htm#sec-Node */
    node?: Maybe<Playlist>;
};
/** A PlaylistItem is a hologram that is inside of a playlist. */
export declare type PlaylistItem = {
    __typename?: 'PlaylistItem';
    createdAt: Scalars['DateTime']['output'];
    /** The reference to the hologram that's in this playlist */
    hologram: Hologram;
    hologramId: Scalars['Int']['output'];
    id: Scalars['Int']['output'];
    /** The playlist that this item is a part of */
    playlist: Playlist;
    playlistId: Scalars['Int']['output'];
    position?: Maybe<Scalars['Int']['output']>;
    updatedAt: Scalars['DateTime']['output'];
    uploadedAt: Scalars['DateTime']['output'];
};
export declare type PlaylistItemEdge = {
    __typename?: 'PlaylistItemEdge';
    /** https://relay.dev/graphql/connections.htm#sec-Cursor */
    cursor: Scalars['String']['output'];
    /** https://relay.dev/graphql/connections.htm#sec-Node */
    node?: Maybe<PlaylistItem>;
};
export declare type PlaylistItems_Connection = {
    __typename?: 'PlaylistItems_Connection';
    /** https://relay.dev/graphql/connections.htm#sec-Edge-Types */
    edges?: Maybe<Array<Maybe<PlaylistItemEdge>>>;
    /** Flattened list of PlaylistItem type */
    nodes?: Maybe<Array<Maybe<PlaylistItem>>>;
    /** https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']['output']>;
};
export declare enum PlaylistPrivacy {
    OnlyMe = "ONLY_ME",
    Password = "PASSWORD",
    Public = "PUBLIC",
    Unlisted = "UNLISTED"
}
export declare enum PlaylistPrivacyFilter {
    All = "ALL",
    OnlyMe = "ONLY_ME",
    Password = "PASSWORD",
    Public = "PUBLIC",
    Unlisted = "UNLISTED"
}
export declare enum PrivacyType {
    OnlyMe = "ONLY_ME",
    Public = "PUBLIC",
    Unlisted = "UNLISTED"
}
export declare type Query = {
    __typename?: 'Query';
    /** Searches for a hologram by id or uuid */
    hologram?: Maybe<Hologram>;
    /**
     * Searches for a hologram by id or uuid
     * @deprecated Use hologram instead
     */
    hologramFindById?: Maybe<Hologram>;
    holograms?: Maybe<QueryHolograms_Connection>;
    me?: Maybe<User>;
    myHolograms?: Maybe<HologramConnection>;
    /** Search for a specific playlist */
    playlist?: Maybe<Playlist>;
    /** Fetch items (holograms) in a given playlist. Only public holograms are returned */
    playlistItems?: Maybe<QueryPlaylistItems_Connection>;
    playlists?: Maybe<QueryPlaylists_Connection>;
    user?: Maybe<User>;
    /** @deprecated Please use the user{} query instead. */
    userFindById?: Maybe<User>;
    users?: Maybe<UserConnection>;
};
export declare type QueryHologramArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    lookup?: InputMaybe<Scalars['String']['input']>;
    uuid?: InputMaybe<Scalars['String']['input']>;
};
export declare type QueryHologramFindByIdArgs = {
    id?: InputMaybe<Scalars['String']['input']>;
    lookup?: InputMaybe<Scalars['String']['input']>;
    uuid?: InputMaybe<Scalars['String']['input']>;
};
export declare type QueryHologramsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    discover?: InputMaybe<Scalars['Boolean']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    last?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Scalars['String']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
};
export declare type QueryMyHologramsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
};
export declare type QueryPlaylistArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    lookup?: InputMaybe<Scalars['String']['input']>;
};
export declare type QueryPlaylistItemsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    lookup?: InputMaybe<Scalars['String']['input']>;
    playlistId?: InputMaybe<Scalars['Int']['input']>;
};
export declare type QueryPlaylistsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Scalars['String']['input']>;
    privacy?: InputMaybe<PlaylistPrivacyFilter>;
};
export declare type QueryUserArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    subId?: InputMaybe<Scalars['String']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
};
export declare type QueryUserFindByIdArgs = {
    id?: InputMaybe<Scalars['Int']['input']>;
    subId?: InputMaybe<Scalars['String']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
};
export declare type QueryUsersArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
};
export declare type QueryHolograms_Connection = {
    __typename?: 'QueryHolograms_Connection';
    /** https://relay.dev/graphql/connections.htm#sec-Edge-Types */
    edges?: Maybe<Array<Maybe<HologramEdge>>>;
    /** Flattened list of Hologram type */
    nodes?: Maybe<Array<Maybe<Hologram>>>;
    /** https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']['output']>;
};
export declare type QueryPlaylistItems_Connection = {
    __typename?: 'QueryPlaylistItems_Connection';
    /** https://relay.dev/graphql/connections.htm#sec-Edge-Types */
    edges?: Maybe<Array<Maybe<PlaylistItemEdge>>>;
    /** Flattened list of PlaylistItem type */
    nodes?: Maybe<Array<Maybe<PlaylistItem>>>;
    /** https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']['output']>;
};
export declare type QueryPlaylists_Connection = {
    __typename?: 'QueryPlaylists_Connection';
    /** https://relay.dev/graphql/connections.htm#sec-Edge-Types */
    edges?: Maybe<Array<Maybe<PlaylistEdge>>>;
    /** Flattened list of Playlist type */
    nodes?: Maybe<Array<Maybe<Playlist>>>;
    /** https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']['output']>;
};
export declare enum Role {
    Admin = "ADMIN",
    User = "USER"
}
/** The input arguments for the updateHologram mutation. */
export declare type UpdateHologramInput = {
    aspectRatio?: InputMaybe<Scalars['Float']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    id: Scalars['Int']['input'];
    isPublished?: InputMaybe<Scalars['Boolean']['input']>;
    privacy?: InputMaybe<PrivacyType>;
    quiltCols?: InputMaybe<Scalars['Int']['input']>;
    quiltRows?: InputMaybe<Scalars['Int']['input']>;
    quiltTileCount?: InputMaybe<Scalars['Int']['input']>;
    rgbdDepthiness?: InputMaybe<Scalars['Float']['input']>;
    rgbdFocus?: InputMaybe<Scalars['Float']['input']>;
    rgbdStretch?: InputMaybe<Scalars['Float']['input']>;
    rgbdZoom?: InputMaybe<Scalars['Float']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};
/** The input arguments for updating a user. */
export declare type UpdateUserInputType = {
    displayName?: InputMaybe<Scalars['String']['input']>;
    pictureUrl?: InputMaybe<Scalars['String']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
};
export declare type User = {
    __typename?: 'User';
    createdAt: Scalars['DateTime']['output'];
    displayName: Scalars['String']['output'];
    /** Restricted access */
    email?: Maybe<Scalars['String']['output']>;
    /** All public holograms created by this user */
    holograms?: Maybe<UserHolograms_Connection>;
    id: Scalars['Int']['output'];
    /** The link to the user's profile */
    permalink: Scalars['String']['output'];
    /** The user's profile picture URL */
    picture?: Maybe<Scalars['String']['output']>;
    playlists?: Maybe<UserPlaylists_Connection>;
    role?: Maybe<Role>;
    /** The Auth0 user id (Restricted) */
    subId?: Maybe<Scalars['String']['output']>;
    /** Unique name for the user */
    username: Scalars['String']['output'];
};
export declare type UserHologramsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    discover?: InputMaybe<Scalars['Boolean']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    last?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Scalars['String']['input']>;
    userId?: InputMaybe<Scalars['Int']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
};
export declare type UserPlaylistsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    before?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    orderBy?: InputMaybe<Scalars['String']['input']>;
    privacy?: InputMaybe<PlaylistPrivacyFilter>;
};
export declare type UserConnection = {
    __typename?: 'UserConnection';
    /** https://relay.dev/graphql/connections.htm#sec-Edge-Types */
    edges?: Maybe<Array<Maybe<UserEdge>>>;
    /** Flattened list of User type */
    nodes?: Maybe<Array<Maybe<User>>>;
    /** https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
    pageInfo: PageInfo;
};
export declare type UserEdge = {
    __typename?: 'UserEdge';
    /** https://relay.dev/graphql/connections.htm#sec-Cursor */
    cursor: Scalars['String']['output'];
    /** https://relay.dev/graphql/connections.htm#sec-Node */
    node?: Maybe<User>;
};
export declare type UserHolograms_Connection = {
    __typename?: 'UserHolograms_Connection';
    /** https://relay.dev/graphql/connections.htm#sec-Edge-Types */
    edges?: Maybe<Array<Maybe<HologramEdge>>>;
    /** Flattened list of Hologram type */
    nodes?: Maybe<Array<Maybe<Hologram>>>;
    /** https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']['output']>;
};
export declare type UserPlaylists_Connection = {
    __typename?: 'UserPlaylists_Connection';
    /** https://relay.dev/graphql/connections.htm#sec-Edge-Types */
    edges?: Maybe<Array<Maybe<PlaylistEdge>>>;
    /** Flattened list of Playlist type */
    nodes?: Maybe<Array<Maybe<Playlist>>>;
    /** https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']['output']>;
};
export declare type HologramRootFragment = {
    __typename?: 'Hologram';
    id: number;
    title?: string | null;
    description?: string | null;
    permalink: string;
    aspectRatio: number;
    quiltCols: number;
    quiltRows: number;
    quiltTileCount: number;
    privacy: PrivacyType;
    type: HologramType;
    thumbnail?: {
        __typename?: 'ImageAsset';
        url: string;
        width: number;
        height: number;
        type: string;
    } | null;
    user: {
        __typename?: 'User';
        id: number;
        username: string;
        displayName: string;
        picture?: string | null;
    };
    sourceImages: Array<{
        __typename?: 'ImageAsset';
        id: number;
        url: string;
        width: number;
        height: number;
        type: string;
        fileSize: number;
    }>;
    previewGifAssets: Array<{
        __typename?: 'ImageAsset';
        url: string;
        width: number;
        height: number;
        type: string;
    }>;
    previewVideoAssets: Array<{
        __typename?: 'ImageAsset';
        url: string;
        width: number;
        height: number;
        type: string;
    }>;
    rgbdAssets?: Array<{
        __typename?: 'ImageAsset';
        url: string;
        width: number;
        height: number;
        type: string;
        kind: ImageAssetKind;
    }> | null;
};
export declare type CreateQuiltHologramMutationVariables = Exact<{
    data?: InputMaybe<CreateQuiltHologramInputType>;
}>;
export declare type CreateQuiltHologramMutation = {
    __typename?: 'Mutation';
    createQuiltHologram: {
        __typename?: 'Hologram';
        id: number;
        permalink: string;
    };
};
export declare type CreateRgbdHologramMutationVariables = Exact<{
    data: CreateHologramFromImageInput;
}>;
export declare type CreateRgbdHologramMutation = {
    __typename?: 'Mutation';
    createHologramFromImage: {
        __typename?: 'Hologram';
        id: number;
        permalink: string;
    };
};
export declare type DeleteHologramMutationVariables = Exact<{
    id: Scalars['Int']['input'];
}>;
export declare type DeleteHologramMutation = {
    __typename?: 'Mutation';
    deleteHologram: {
        __typename?: 'Hologram';
        id: number;
    };
};
export declare type UpdateHologramMutationVariables = Exact<{
    data: UpdateHologramInput;
}>;
export declare type UpdateHologramMutation = {
    __typename?: 'Mutation';
    updateHologram: {
        __typename?: 'Hologram';
        id: number;
        title?: string | null;
        permalink: string;
    };
};
export declare type FindHologramQueryVariables = Exact<{
    lookup: Scalars['String']['input'];
    thumbnailWidth?: InputMaybe<Scalars['Int']['input']>;
}>;
export declare type FindHologramQuery = {
    __typename?: 'Query';
    hologram?: {
        __typename?: 'Hologram';
        id: number;
        title?: string | null;
        description?: string | null;
        permalink: string;
        aspectRatio: number;
        quiltCols: number;
        quiltRows: number;
        quiltTileCount: number;
        privacy: PrivacyType;
        type: HologramType;
        thumbnail?: {
            __typename?: 'ImageAsset';
            url: string;
            width: number;
            height: number;
            type: string;
        } | null;
        user: {
            __typename?: 'User';
            id: number;
            username: string;
            displayName: string;
            picture?: string | null;
        };
        sourceImages: Array<{
            __typename?: 'ImageAsset';
            id: number;
            url: string;
            width: number;
            height: number;
            type: string;
            fileSize: number;
        }>;
        previewGifAssets: Array<{
            __typename?: 'ImageAsset';
            url: string;
            width: number;
            height: number;
            type: string;
        }>;
        previewVideoAssets: Array<{
            __typename?: 'ImageAsset';
            url: string;
            width: number;
            height: number;
            type: string;
        }>;
        rgbdAssets?: Array<{
            __typename?: 'ImageAsset';
            url: string;
            width: number;
            height: number;
            type: string;
            kind: ImageAssetKind;
        }> | null;
    } | null;
};
export declare type FindPlaylistQueryVariables = Exact<{
    id?: InputMaybe<Scalars['Int']['input']>;
    lookup?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    thumbnailWidth?: InputMaybe<Scalars['Int']['input']>;
}>;
export declare type FindPlaylistQuery = {
    __typename?: 'Query';
    playlist?: {
        __typename?: 'Playlist';
        id: number;
        title: string;
        description?: string | null;
        permalink: string;
        privacy: PlaylistPrivacy;
        updatedAt: any;
        items?: {
            __typename?: 'PlaylistItems_Connection';
            totalCount?: number | null;
            pageInfo: {
                __typename?: 'PageInfo';
                hasNextPage: boolean;
                hasPreviousPage: boolean;
                startCursor?: string | null;
                endCursor?: string | null;
            };
            edges?: Array<{
                __typename?: 'PlaylistItemEdge';
                node?: {
                    __typename?: 'PlaylistItem';
                    id: number;
                    hologramId: number;
                    position?: number | null;
                    hologram: {
                        __typename?: 'Hologram';
                        id: number;
                        title?: string | null;
                        description?: string | null;
                        permalink: string;
                        aspectRatio: number;
                        quiltCols: number;
                        quiltRows: number;
                        quiltTileCount: number;
                        privacy: PrivacyType;
                        type: HologramType;
                        thumbnail?: {
                            __typename?: 'ImageAsset';
                            url: string;
                            width: number;
                            height: number;
                            type: string;
                        } | null;
                        user: {
                            __typename?: 'User';
                            id: number;
                            username: string;
                            displayName: string;
                            picture?: string | null;
                        };
                        sourceImages: Array<{
                            __typename?: 'ImageAsset';
                            id: number;
                            url: string;
                            width: number;
                            height: number;
                            type: string;
                            fileSize: number;
                        }>;
                        previewGifAssets: Array<{
                            __typename?: 'ImageAsset';
                            url: string;
                            width: number;
                            height: number;
                            type: string;
                        }>;
                        previewVideoAssets: Array<{
                            __typename?: 'ImageAsset';
                            url: string;
                            width: number;
                            height: number;
                            type: string;
                        }>;
                        rgbdAssets?: Array<{
                            __typename?: 'ImageAsset';
                            url: string;
                            width: number;
                            height: number;
                            type: string;
                            kind: ImageAssetKind;
                        }> | null;
                    };
                } | null;
            } | null> | null;
        } | null;
        thumbnail?: {
            __typename?: 'ImageAsset';
            id: number;
            url: string;
            width: number;
            height: number;
            type: string;
        } | null;
    } | null;
};
export declare type MeQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type MeQuery = {
    __typename?: 'Query';
    me?: {
        __typename?: 'User';
        id: number;
        username: string;
        displayName: string;
        email?: string | null;
        picture?: string | null;
        createdAt: any;
    } | null;
};
export declare type MyHologramsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['Int']['input']>;
    thumbnailWidth?: InputMaybe<Scalars['Int']['input']>;
}>;
export declare type MyHologramsQuery = {
    __typename?: 'Query';
    me?: {
        __typename?: 'User';
        username: string;
        displayName: string;
        holograms?: {
            __typename?: 'UserHolograms_Connection';
            nodes?: Array<{
                __typename?: 'Hologram';
                id: number;
                title?: string | null;
                description?: string | null;
                permalink: string;
                aspectRatio: number;
                quiltCols: number;
                quiltRows: number;
                quiltTileCount: number;
                privacy: PrivacyType;
                type: HologramType;
                thumbnail?: {
                    __typename?: 'ImageAsset';
                    url: string;
                    width: number;
                    height: number;
                    type: string;
                } | null;
                user: {
                    __typename?: 'User';
                    id: number;
                    username: string;
                    displayName: string;
                    picture?: string | null;
                };
                sourceImages: Array<{
                    __typename?: 'ImageAsset';
                    id: number;
                    url: string;
                    width: number;
                    height: number;
                    type: string;
                    fileSize: number;
                }>;
                previewGifAssets: Array<{
                    __typename?: 'ImageAsset';
                    url: string;
                    width: number;
                    height: number;
                    type: string;
                }>;
                previewVideoAssets: Array<{
                    __typename?: 'ImageAsset';
                    url: string;
                    width: number;
                    height: number;
                    type: string;
                }>;
                rgbdAssets?: Array<{
                    __typename?: 'ImageAsset';
                    url: string;
                    width: number;
                    height: number;
                    type: string;
                    kind: ImageAssetKind;
                }> | null;
            } | null> | null;
        } | null;
    } | null;
};
export declare type VerifySessionQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type VerifySessionQuery = {
    __typename?: 'Query';
    me?: {
        __typename?: 'User';
        id: number;
        username: string;
        displayName: string;
        email?: string | null;
    } | null;
};
export declare const HologramRootFragmentDoc: DocumentNode<HologramRootFragment, unknown>;
export declare const CreateQuiltHologramDocument: DocumentNode<CreateQuiltHologramMutation, Exact<{
    data?: InputMaybe<CreateQuiltHologramInputType> | undefined;
}>>;
export declare const CreateRgbdHologramDocument: DocumentNode<CreateRgbdHologramMutation, Exact<{
    data: CreateHologramFromImageInput;
}>>;
export declare const DeleteHologramDocument: DocumentNode<DeleteHologramMutation, Exact<{
    id: Scalars['Int']['input'];
}>>;
export declare const UpdateHologramDocument: DocumentNode<UpdateHologramMutation, Exact<{
    data: UpdateHologramInput;
}>>;
export declare const FindHologramDocument: DocumentNode<FindHologramQuery, Exact<{
    lookup: Scalars['String']['input'];
    thumbnailWidth?: InputMaybe<number> | undefined;
}>>;
export declare const FindPlaylistDocument: DocumentNode<FindPlaylistQuery, Exact<{
    id?: InputMaybe<number> | undefined;
    lookup?: InputMaybe<string> | undefined;
    first?: InputMaybe<number> | undefined;
    thumbnailWidth?: InputMaybe<number> | undefined;
}>>;
export declare const MeDocument: DocumentNode<MeQuery, Exact<{
    [key: string]: never;
}>>;
export declare const MyHologramsDocument: DocumentNode<MyHologramsQuery, Exact<{
    first?: InputMaybe<number> | undefined;
    thumbnailWidth?: InputMaybe<number> | undefined;
}>>;
export declare const VerifySessionDocument: DocumentNode<VerifySessionQuery, Exact<{
    [key: string]: never;
}>>;
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
    BatchPayload: ResolverTypeWrapper<BatchPayload>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    CreateHologramFromImageInput: CreateHologramFromImageInput;
    CreateQuiltHologramInputType: CreateQuiltHologramInputType;
    Date: ResolverTypeWrapper<Scalars['Date']['output']>;
    DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
    Float: ResolverTypeWrapper<Scalars['Float']['output']>;
    Hologram: ResolverTypeWrapper<Hologram>;
    HologramConnection: ResolverTypeWrapper<HologramConnection>;
    HologramEdge: ResolverTypeWrapper<HologramEdge>;
    HologramType: HologramType;
    ImageAsset: ResolverTypeWrapper<ImageAsset>;
    ImageAssetKind: ImageAssetKind;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    Mutation: ResolverTypeWrapper<{}>;
    PageInfo: ResolverTypeWrapper<PageInfo>;
    Playlist: ResolverTypeWrapper<Playlist>;
    PlaylistEdge: ResolverTypeWrapper<PlaylistEdge>;
    PlaylistItem: ResolverTypeWrapper<PlaylistItem>;
    PlaylistItemEdge: ResolverTypeWrapper<PlaylistItemEdge>;
    PlaylistItems_Connection: ResolverTypeWrapper<PlaylistItems_Connection>;
    PlaylistPrivacy: PlaylistPrivacy;
    PlaylistPrivacyFilter: PlaylistPrivacyFilter;
    PrivacyType: PrivacyType;
    Query: ResolverTypeWrapper<{}>;
    QueryHolograms_Connection: ResolverTypeWrapper<QueryHolograms_Connection>;
    QueryPlaylistItems_Connection: ResolverTypeWrapper<QueryPlaylistItems_Connection>;
    QueryPlaylists_Connection: ResolverTypeWrapper<QueryPlaylists_Connection>;
    Role: Role;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    Time: ResolverTypeWrapper<Scalars['Time']['output']>;
    UpdateHologramInput: UpdateHologramInput;
    UpdateUserInputType: UpdateUserInputType;
    User: ResolverTypeWrapper<User>;
    UserConnection: ResolverTypeWrapper<UserConnection>;
    UserEdge: ResolverTypeWrapper<UserEdge>;
    UserHolograms_Connection: ResolverTypeWrapper<UserHolograms_Connection>;
    UserPlaylists_Connection: ResolverTypeWrapper<UserPlaylists_Connection>;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
    BatchPayload: BatchPayload;
    Boolean: Scalars['Boolean']['output'];
    CreateHologramFromImageInput: CreateHologramFromImageInput;
    CreateQuiltHologramInputType: CreateQuiltHologramInputType;
    Date: Scalars['Date']['output'];
    DateTime: Scalars['DateTime']['output'];
    Float: Scalars['Float']['output'];
    Hologram: Hologram;
    HologramConnection: HologramConnection;
    HologramEdge: HologramEdge;
    ImageAsset: ImageAsset;
    Int: Scalars['Int']['output'];
    Mutation: {};
    PageInfo: PageInfo;
    Playlist: Playlist;
    PlaylistEdge: PlaylistEdge;
    PlaylistItem: PlaylistItem;
    PlaylistItemEdge: PlaylistItemEdge;
    PlaylistItems_Connection: PlaylistItems_Connection;
    Query: {};
    QueryHolograms_Connection: QueryHolograms_Connection;
    QueryPlaylistItems_Connection: QueryPlaylistItems_Connection;
    QueryPlaylists_Connection: QueryPlaylists_Connection;
    String: Scalars['String']['output'];
    Time: Scalars['Time']['output'];
    UpdateHologramInput: UpdateHologramInput;
    UpdateUserInputType: UpdateUserInputType;
    User: User;
    UserConnection: UserConnection;
    UserEdge: UserEdge;
    UserHolograms_Connection: UserHolograms_Connection;
    UserPlaylists_Connection: UserPlaylists_Connection;
};
export declare type BatchPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']> = {
    count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
    name: 'Date';
}
export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
    name: 'DateTime';
}
export declare type HologramResolvers<ContextType = any, ParentType extends ResolversParentTypes['Hologram'] = ResolversParentTypes['Hologram']> = {
    aspectRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    embedCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    madeWith?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    permalink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    previewGifAssets?: Resolver<Array<ResolversTypes['ImageAsset']>, ParentType, ContextType>;
    previewVideoAssets?: Resolver<Array<ResolversTypes['ImageAsset']>, ParentType, ContextType>;
    privacy?: Resolver<ResolversTypes['PrivacyType'], ParentType, ContextType>;
    quiltAngleImages?: Resolver<Array<ResolversTypes['ImageAsset']>, ParentType, ContextType, RequireFields<HologramQuiltAngleImagesArgs, 'width'>>;
    quiltCols?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    quiltRows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    quiltTileCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    rgbdAssets?: Resolver<Maybe<Array<ResolversTypes['ImageAsset']>>, ParentType, ContextType>;
    rgbdDepthiness?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    rgbdFocus?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    rgbdStretch?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    rgbdZoom?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    sourceImages?: Resolver<Array<ResolversTypes['ImageAsset']>, ParentType, ContextType>;
    thumbnail?: Resolver<Maybe<ResolversTypes['ImageAsset']>, ParentType, ContextType, RequireFields<HologramThumbnailArgs, 'width'>>;
    thumbnails?: Resolver<Array<ResolversTypes['ImageAsset']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    totalViews?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['HologramType'], ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
    user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type HologramConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['HologramConnection'] = ResolversParentTypes['HologramConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['HologramEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Hologram']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type HologramEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HologramEdge'] = ResolversParentTypes['HologramEdge']> = {
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Hologram']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type ImageAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageAsset'] = ResolversParentTypes['ImageAsset']> = {
    fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    kind?: Resolver<ResolversTypes['ImageAssetKind'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    versionHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
    createHologramFromImage?: Resolver<ResolversTypes['Hologram'], ParentType, ContextType, RequireFields<MutationCreateHologramFromImageArgs, 'data'>>;
    createImageAsset?: Resolver<ResolversTypes['ImageAsset'], ParentType, ContextType, RequireFields<MutationCreateImageAssetArgs, 'fileSize' | 'height' | 'hologramId' | 'type' | 'url' | 'width'>>;
    createPlaylist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType, RequireFields<MutationCreatePlaylistArgs, 'isPublished' | 'privacy' | 'title'>>;
    createPlaylistItem?: Resolver<ResolversTypes['PlaylistItem'], ParentType, ContextType, RequireFields<MutationCreatePlaylistItemArgs, 'hologramId' | 'playlistId'>>;
    createPlaylistItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationCreatePlaylistItemsArgs, 'hologramIds' | 'playlistId'>>;
    createQuiltHologram?: Resolver<ResolversTypes['Hologram'], ParentType, ContextType, RequireFields<MutationCreateQuiltHologramArgs, 'isPublished' | 'privacy' | 'type'>>;
    deleteHologram?: Resolver<ResolversTypes['Hologram'], ParentType, ContextType, RequireFields<MutationDeleteHologramArgs, 'id'>>;
    deleteHolograms?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteHologramsArgs, 'ids'>>;
    deletePlaylist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType, RequireFields<MutationDeletePlaylistArgs, 'id'>>;
    deletePlaylistItem?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeletePlaylistItemArgs, 'id' | 'playlistId'>>;
    deletePlaylistItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeletePlaylistItemsArgs, 'ids' | 'playlistId'>>;
    replaceQuiltHologram?: Resolver<ResolversTypes['Hologram'], ParentType, ContextType, RequireFields<MutationReplaceQuiltHologramArgs, 'id' | 'imageUrl'>>;
    updateHologram?: Resolver<ResolversTypes['Hologram'], ParentType, ContextType, Partial<MutationUpdateHologramArgs>>;
    updatePlaylist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType, RequireFields<MutationUpdatePlaylistArgs, 'id' | 'privacy'>>;
    updatePlaylistItem?: Resolver<ResolversTypes['PlaylistItem'], ParentType, ContextType, RequireFields<MutationUpdatePlaylistItemArgs, 'id' | 'position'>>;
    updateQuiltHologram?: Resolver<ResolversTypes['Hologram'], ParentType, ContextType, RequireFields<MutationUpdateQuiltHologramArgs, 'id' | 'privacy'>>;
    updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, Partial<MutationUpdateUserArgs>>;
};
export declare type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
    endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PlaylistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']> = {
    createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    featuredHologram?: Resolver<Maybe<ResolversTypes['Hologram']>, ParentType, ContextType>;
    featuredHologramId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    items?: Resolver<Maybe<ResolversTypes['PlaylistItems_Connection']>, ParentType, ContextType, RequireFields<PlaylistItemsArgs, 'discover'>>;
    path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    permalink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    privacy?: Resolver<ResolversTypes['PlaylistPrivacy'], ParentType, ContextType>;
    thumbnail?: Resolver<Maybe<ResolversTypes['ImageAsset']>, ParentType, ContextType, RequireFields<PlaylistThumbnailArgs, 'width'>>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
    user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PlaylistEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaylistEdge'] = ResolversParentTypes['PlaylistEdge']> = {
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Playlist']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PlaylistItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaylistItem'] = ResolversParentTypes['PlaylistItem']> = {
    createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
    hologram?: Resolver<ResolversTypes['Hologram'], ParentType, ContextType>;
    hologramId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    playlist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType>;
    playlistId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
    uploadedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PlaylistItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaylistItemEdge'] = ResolversParentTypes['PlaylistItemEdge']> = {
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['PlaylistItem']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PlaylistItems_ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaylistItems_Connection'] = ResolversParentTypes['PlaylistItems_Connection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistItemEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistItem']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    hologram?: Resolver<Maybe<ResolversTypes['Hologram']>, ParentType, ContextType, Partial<QueryHologramArgs>>;
    hologramFindById?: Resolver<Maybe<ResolversTypes['Hologram']>, ParentType, ContextType, Partial<QueryHologramFindByIdArgs>>;
    holograms?: Resolver<Maybe<ResolversTypes['QueryHolograms_Connection']>, ParentType, ContextType, RequireFields<QueryHologramsArgs, 'discover'>>;
    me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    myHolograms?: Resolver<Maybe<ResolversTypes['HologramConnection']>, ParentType, ContextType, Partial<QueryMyHologramsArgs>>;
    playlist?: Resolver<Maybe<ResolversTypes['Playlist']>, ParentType, ContextType, Partial<QueryPlaylistArgs>>;
    playlistItems?: Resolver<Maybe<ResolversTypes['QueryPlaylistItems_Connection']>, ParentType, ContextType, Partial<QueryPlaylistItemsArgs>>;
    playlists?: Resolver<Maybe<ResolversTypes['QueryPlaylists_Connection']>, ParentType, ContextType, RequireFields<QueryPlaylistsArgs, 'privacy'>>;
    user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUserArgs>>;
    userFindById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUserFindByIdArgs>>;
    users?: Resolver<Maybe<ResolversTypes['UserConnection']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};
export declare type QueryHolograms_ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryHolograms_Connection'] = ResolversParentTypes['QueryHolograms_Connection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['HologramEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Hologram']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type QueryPlaylistItems_ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryPlaylistItems_Connection'] = ResolversParentTypes['QueryPlaylistItems_Connection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistItemEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistItem']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type QueryPlaylists_ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryPlaylists_Connection'] = ResolversParentTypes['QueryPlaylists_Connection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
    name: 'Time';
}
export declare type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
    createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
    displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    holograms?: Resolver<Maybe<ResolversTypes['UserHolograms_Connection']>, ParentType, ContextType, RequireFields<UserHologramsArgs, 'discover'>>;
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    permalink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    playlists?: Resolver<Maybe<ResolversTypes['UserPlaylists_Connection']>, ParentType, ContextType, RequireFields<UserPlaylistsArgs, 'privacy'>>;
    role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
    subId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type UserHolograms_ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserHolograms_Connection'] = ResolversParentTypes['UserHolograms_Connection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['HologramEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Hologram']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type UserPlaylists_ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPlaylists_Connection'] = ResolversParentTypes['UserPlaylists_Connection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistEdge']>>>, ParentType, ContextType>;
    nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type Resolvers<ContextType = any> = {
    BatchPayload?: BatchPayloadResolvers<ContextType>;
    Date?: GraphQLScalarType;
    DateTime?: GraphQLScalarType;
    Hologram?: HologramResolvers<ContextType>;
    HologramConnection?: HologramConnectionResolvers<ContextType>;
    HologramEdge?: HologramEdgeResolvers<ContextType>;
    ImageAsset?: ImageAssetResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    PageInfo?: PageInfoResolvers<ContextType>;
    Playlist?: PlaylistResolvers<ContextType>;
    PlaylistEdge?: PlaylistEdgeResolvers<ContextType>;
    PlaylistItem?: PlaylistItemResolvers<ContextType>;
    PlaylistItemEdge?: PlaylistItemEdgeResolvers<ContextType>;
    PlaylistItems_Connection?: PlaylistItems_ConnectionResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    QueryHolograms_Connection?: QueryHolograms_ConnectionResolvers<ContextType>;
    QueryPlaylistItems_Connection?: QueryPlaylistItems_ConnectionResolvers<ContextType>;
    QueryPlaylists_Connection?: QueryPlaylists_ConnectionResolvers<ContextType>;
    Time?: GraphQLScalarType;
    User?: UserResolvers<ContextType>;
    UserConnection?: UserConnectionResolvers<ContextType>;
    UserEdge?: UserEdgeResolvers<ContextType>;
    UserHolograms_Connection?: UserHolograms_ConnectionResolvers<ContextType>;
    UserPlaylists_Connection?: UserPlaylists_ConnectionResolvers<ContextType>;
};
