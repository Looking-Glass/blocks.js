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
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: any;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: any;
    /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Time: any;
};
export declare type BatchPayload = {
    __typename?: 'BatchPayload';
    count?: Maybe<Scalars['Int']>;
};
export declare type Hologram = {
    __typename?: 'Hologram';
    aspectRatio?: Maybe<Scalars['Float']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    isPublished?: Maybe<Scalars['Boolean']>;
    /** Animated GIF previews */
    previewGifAssets?: Maybe<Array<Maybe<ImageAsset>>>;
    /** Animated MP4 previews */
    previewVideoAssets?: Maybe<Array<Maybe<ImageAsset>>>;
    /** Restricted access */
    privacy?: Maybe<PrivacyType>;
    /** Get all the individual quilt angles (Restricted) */
    quiltAngleImages?: Maybe<Array<Maybe<ImageAsset>>>;
    quiltCols?: Maybe<Scalars['Int']>;
    quiltRows?: Maybe<Scalars['Int']>;
    quiltTileCount?: Maybe<Scalars['Int']>;
    sourceImages?: Maybe<Array<Maybe<ImageAsset>>>;
    /** Thumbnail preview */
    thumbnail?: Maybe<ImageAsset>;
    title?: Maybe<Scalars['String']>;
    type?: Maybe<HologramType>;
    user?: Maybe<User>;
    /** Restricted access */
    uuid?: Maybe<Scalars['String']>;
};
export declare type HologramQuiltAngleImagesArgs = {
    width?: InputMaybe<Scalars['Int']>;
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
    cursor: Scalars['String'];
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
    fileSize?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
    /** File's content type */
    type?: Maybe<Scalars['String']>;
    /** Location of the asset */
    url?: Maybe<Scalars['String']>;
    /** A hash of the inputs used to generate this preview */
    versionHash?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['Int']>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    /** Attach a new asset to a Hologram (Restricted) */
    createImageAsset: ImageAsset;
    createPlaylist: Playlist;
    /** Add a hologram to a playlist. */
    createPlaylistItem: PlaylistItem;
    /** Add one or more holograms to a playlist. */
    createPlaylistItems: BatchPayload;
    createQuiltHologram: Hologram;
    deleteHologram: Hologram;
    /** Restricted */
    deleteHolograms: BatchPayload;
    deletePlaylist: Playlist;
    /** Remove a single hologram from a playlist */
    deletePlaylistItem: BatchPayload;
    /** Remove one or more holograms from a playlist */
    deletePlaylistItems: BatchPayload;
    replaceQuiltHologram: Hologram;
    /** Update a playlist's metadata */
    updatePlaylist: Playlist;
    updateQuiltHologram: Hologram;
    updateUser: User;
};
export declare type MutationCreateImageAssetArgs = {
    fileSize: Scalars['Int'];
    height: Scalars['Int'];
    hologramId: Scalars['Int'];
    type: Scalars['String'];
    url: Scalars['String'];
    versionHash?: InputMaybe<Scalars['String']>;
    width: Scalars['Int'];
};
export declare type MutationCreatePlaylistArgs = {
    description?: InputMaybe<Scalars['String']>;
    isPublished?: InputMaybe<Scalars['Boolean']>;
    privacy?: InputMaybe<PlaylistPrivacy>;
    title: Scalars['String'];
};
export declare type MutationCreatePlaylistItemArgs = {
    hologramId: Scalars['Int'];
    playlistId: Scalars['Int'];
    position?: InputMaybe<Scalars['Int']>;
};
export declare type MutationCreatePlaylistItemsArgs = {
    hologramIds: Array<InputMaybe<Scalars['Int']>>;
    playlistId: Scalars['Int'];
};
export declare type MutationCreateQuiltHologramArgs = {
    aspectRatio?: InputMaybe<Scalars['Float']>;
    description?: InputMaybe<Scalars['String']>;
    fileSize: Scalars['Int'];
    height: Scalars['Int'];
    imageUrl: Scalars['String'];
    isPublished?: InputMaybe<Scalars['Boolean']>;
    privacy?: InputMaybe<PrivacyType>;
    quiltCols?: InputMaybe<Scalars['Int']>;
    quiltRows?: InputMaybe<Scalars['Int']>;
    quiltTileCount?: InputMaybe<Scalars['Int']>;
    title: Scalars['String'];
    type?: InputMaybe<HologramType>;
    width: Scalars['Int'];
};
export declare type MutationDeleteHologramArgs = {
    id: Scalars['Int'];
};
export declare type MutationDeleteHologramsArgs = {
    ids: Array<InputMaybe<Scalars['Int']>>;
};
export declare type MutationDeletePlaylistArgs = {
    id: Scalars['Int'];
};
export declare type MutationDeletePlaylistItemArgs = {
    id: Scalars['Int'];
    playlistId: Scalars['Int'];
};
export declare type MutationDeletePlaylistItemsArgs = {
    ids: Array<InputMaybe<Scalars['Int']>>;
    playlistId: Scalars['Int'];
};
export declare type MutationReplaceQuiltHologramArgs = {
    fileSize: Scalars['Int'];
    height: Scalars['Int'];
    id: Scalars['Int'];
    imageUrl: Scalars['String'];
    width: Scalars['Int'];
};
export declare type MutationUpdatePlaylistArgs = {
    description?: InputMaybe<Scalars['String']>;
    id: Scalars['Int'];
    privacy?: InputMaybe<PlaylistPrivacy>;
    title?: InputMaybe<Scalars['String']>;
};
export declare type MutationUpdateQuiltHologramArgs = {
    aspectRatio: Scalars['Float'];
    description?: InputMaybe<Scalars['String']>;
    id: Scalars['Int'];
    isPublished?: InputMaybe<Scalars['Boolean']>;
    privacy?: InputMaybe<Scalars['String']>;
    quiltCols: Scalars['Int'];
    quiltRows: Scalars['Int'];
    quiltTileCount: Scalars['Int'];
    title: Scalars['String'];
};
export declare type MutationUpdateUserArgs = {
    displayName?: InputMaybe<Scalars['String']>;
    username: Scalars['String'];
};
/** PageInfo cursor, as defined in https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
export declare type PageInfo = {
    __typename?: 'PageInfo';
    /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
    endCursor?: Maybe<Scalars['String']>;
    /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
    hasNextPage: Scalars['Boolean'];
    /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
    hasPreviousPage: Scalars['Boolean'];
    /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
    startCursor?: Maybe<Scalars['String']>;
};
/** A playlist contains a collection of holograms. */
export declare type Playlist = {
    __typename?: 'Playlist';
    createdAt?: Maybe<Scalars['DateTime']>;
    description?: Maybe<Scalars['String']>;
    holograms?: Maybe<PlaylistItemConnection>;
    id?: Maybe<Scalars['Int']>;
    isPublished?: Maybe<Scalars['Boolean']>;
    /** The privacy status of this playlist. (Restricted) */
    privacy?: Maybe<PlaylistPrivacy>;
    title?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** The owner of this playlist */
    user?: Maybe<User>;
    /** Use this instead of user if you only need the user's ID */
    userId?: Maybe<Scalars['Int']>;
    /** (Restricted) */
    uuid?: Maybe<Scalars['String']>;
};
/** A playlist contains a collection of holograms. */
export declare type PlaylistHologramsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};
export declare type PlaylistEdge = {
    __typename?: 'PlaylistEdge';
    /** https://relay.dev/graphql/connections.htm#sec-Cursor */
    cursor: Scalars['String'];
    /** https://relay.dev/graphql/connections.htm#sec-Node */
    node?: Maybe<Playlist>;
};
/** A PlaylistItem is a hologram that is inside of a playlist. */
export declare type PlaylistItem = {
    __typename?: 'PlaylistItem';
    createdAt?: Maybe<Scalars['DateTime']>;
    /** The reference to the hologram that's in this playlist */
    hologram?: Maybe<Hologram>;
    hologramId?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
    /** The playlist that this item is a part of */
    playlist?: Maybe<Playlist>;
    playlistId?: Maybe<Scalars['Int']>;
    position?: Maybe<Scalars['Int']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    uploadedAt?: Maybe<Scalars['DateTime']>;
};
export declare type PlaylistItemConnection = {
    __typename?: 'PlaylistItemConnection';
    /** https://relay.dev/graphql/connections.htm#sec-Edge-Types */
    edges?: Maybe<Array<Maybe<PlaylistItemEdge>>>;
    /** Flattened list of PlaylistItem type */
    nodes?: Maybe<Array<Maybe<PlaylistItem>>>;
    /** https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
    pageInfo: PageInfo;
};
export declare type PlaylistItemEdge = {
    __typename?: 'PlaylistItemEdge';
    /** https://relay.dev/graphql/connections.htm#sec-Cursor */
    cursor: Scalars['String'];
    /** https://relay.dev/graphql/connections.htm#sec-Node */
    node?: Maybe<PlaylistItem>;
};
export declare enum PlaylistPrivacy {
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
    hologramFindById?: Maybe<Hologram>;
    holograms?: Maybe<HologramConnection>;
    me?: Maybe<User>;
    myHolograms?: Maybe<HologramConnection>;
    /** Search for a specific playlist */
    playlist?: Maybe<Playlist>;
    playlists?: Maybe<QueryPlaylists_Connection>;
    user?: Maybe<User>;
    /** @deprecated Please use the user{} query instead. */
    userFindById?: Maybe<User>;
    users?: Maybe<UserConnection>;
};
export declare type QueryHologramFindByIdArgs = {
    id?: InputMaybe<Scalars['String']>;
    uuid?: InputMaybe<Scalars['String']>;
};
export declare type QueryHologramsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    last?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
    username?: InputMaybe<Scalars['String']>;
};
export declare type QueryMyHologramsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};
export declare type QueryPlaylistArgs = {
    id?: InputMaybe<Scalars['Int']>;
    lookup?: InputMaybe<Scalars['String']>;
};
export declare type QueryPlaylistsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Scalars['String']>;
};
export declare type QueryUserArgs = {
    id?: InputMaybe<Scalars['Int']>;
    subId?: InputMaybe<Scalars['String']>;
    username?: InputMaybe<Scalars['String']>;
};
export declare type QueryUserFindByIdArgs = {
    id?: InputMaybe<Scalars['Int']>;
    subId?: InputMaybe<Scalars['String']>;
    username?: InputMaybe<Scalars['String']>;
};
export declare type QueryUsersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};
export declare type QueryPlaylists_Connection = {
    __typename?: 'QueryPlaylists_Connection';
    /** https://relay.dev/graphql/connections.htm#sec-Edge-Types */
    edges?: Maybe<Array<Maybe<PlaylistEdge>>>;
    /** Flattened list of Playlist type */
    nodes?: Maybe<Array<Maybe<Playlist>>>;
    /** https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare enum Role {
    Admin = "ADMIN",
    User = "USER"
}
export declare type User = {
    __typename?: 'User';
    createdAt?: Maybe<Scalars['DateTime']>;
    displayName?: Maybe<Scalars['String']>;
    /** Restricted access */
    email?: Maybe<Scalars['String']>;
    holograms?: Maybe<HologramConnection>;
    id?: Maybe<Scalars['Int']>;
    picture?: Maybe<Scalars['String']>;
    playlists?: Maybe<UserPlaylists_Connection>;
    role?: Maybe<Role>;
    /** The Auth0 user id (Restricted access) */
    subId?: Maybe<Scalars['String']>;
    /** Unique name for the user */
    username?: Maybe<Scalars['String']>;
};
export declare type UserHologramsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    last?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
    username?: InputMaybe<Scalars['String']>;
};
export declare type UserPlaylistsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Scalars['String']>;
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
    cursor: Scalars['String'];
    /** https://relay.dev/graphql/connections.htm#sec-Node */
    node?: Maybe<User>;
};
export declare type UserPlaylists_Connection = {
    __typename?: 'UserPlaylists_Connection';
    /** https://relay.dev/graphql/connections.htm#sec-Edge-Types */
    edges?: Maybe<Array<Maybe<PlaylistEdge>>>;
    /** Flattened list of Playlist type */
    nodes?: Maybe<Array<Maybe<Playlist>>>;
    /** https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};
export declare type FindHologramQueryVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type FindHologramQuery = {
    __typename?: 'Query';
    hologramFindById?: {
        __typename?: 'Hologram';
        id?: number | null;
        title?: string | null;
        aspectRatio?: number | null;
        quiltCols?: number | null;
        quiltRows?: number | null;
        quiltTileCount?: number | null;
        sourceImages?: Array<{
            __typename?: 'ImageAsset';
            id?: number | null;
            url?: string | null;
            width?: number | null;
            height?: number | null;
            type?: string | null;
            fileSize?: number | null;
        } | null> | null;
    } | null;
};
export declare type MyHologramsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['Int']>;
}>;
export declare type MyHologramsQuery = {
    __typename?: 'Query';
    me?: {
        __typename?: 'User';
        username?: string | null;
        holograms?: {
            __typename?: 'HologramConnection';
            nodes?: Array<{
                __typename?: 'Hologram';
                id?: number | null;
                title?: string | null;
                aspectRatio?: number | null;
                quiltCols?: number | null;
                quiltRows?: number | null;
                quiltTileCount?: number | null;
                sourceImages?: Array<{
                    __typename?: 'ImageAsset';
                    id?: number | null;
                    url?: string | null;
                    width?: number | null;
                    height?: number | null;
                    type?: string | null;
                    fileSize?: number | null;
                } | null> | null;
            } | null> | null;
        } | null;
    } | null;
};
export declare const FindHologramDocument: DocumentNode<FindHologramQuery, Exact<{
    id: Scalars['String'];
}>>;
export declare const MyHologramsDocument: DocumentNode<MyHologramsQuery, Exact<{
    first?: InputMaybe<number> | undefined;
}>>;
