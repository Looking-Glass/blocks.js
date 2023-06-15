import { TypedQueryDocumentNode } from "graphql"
import { RequestDocument, RequestExtendedOptions, RequestOptions, Variables, request } from "graphql-request"
import fetch from "cross-fetch"
import {
	CreateHologramFromImageInput,
	CreateQuiltHologramDocument,
	CreateQuiltHologramInputType,
	CreateRgbdHologramDocument,
	FindHologramDocument,
	FindPlaylistDocument,
	FindPlaylistQuery,
	MeDocument,
	MyHologramsDocument,
	UpdateHologramDocument,
	UpdateHologramInput,
} from "./graphql/gql/types"
import { PresignedPost } from "./types"

/**
 * @defaultValue ["png", "jpg", "jpeg", "webp", "bmp"]
 */
export const HOLOGRAM_QUILT_IMAGE_FORMATS = ["png", "jpg", "jpeg", "webp", "bmp"]

/**
 * @defaultValue ["image/png", "image/jpg", "image/jpeg", "image/webp", "image/bmp"]
 */
export const HOLOGRAM_QUILT_IMAGE_MIMETYPES = HOLOGRAM_QUILT_IMAGE_FORMATS.map((f) => `image/${f}`)

export type BlocksClientArgs = {
	/** The JWT token that's used to authenticate with the Blocks API */
	token: string | null
	/**
	 * Change the API url if you're using a self-hosted version of Blocks
	 * @default https://blocks.glass */
	apiUrl?: string
}

const defaults: BlocksClientArgs = {
	token: null,
	apiUrl: "https://blocks.glass",
}

export class BlocksClient {
	private args: BlocksClientArgs

	/**
	 * Initialize the BlocksClient with a valid JWT token. See {@link validateSession} for how to get a token.
	 * @example
	 * ```ts
	 * const blocksClient = new BlocksClient({
	 *   token: "BLOCKS_API_TOKEN_HERE"
	 * });
	 * ```
	 */
	constructor(args: BlocksClientArgs) {
		this.args = { ...defaults, ...args }
	}

	/** Fetch info about the currently signed in user. */
	public async me() {
		return (
			await this.request({
				document: MeDocument,
			})
		).me
	}

	/** Fetch an invididual hologram by id */
	public async hologram(id: number) {
		return (
			await this.request({
				document: FindHologramDocument,
				variables: {
					lookup: id.toString(),
				},
			})
		).hologram
	}

	/**
	 * Fetch a playlist
	 * @id The id of the playlist
	 * @limit Number of total holograms you want to load in
	 */
	public async playlist(id: number, limit: number = 50) {
		return (
			await this.request({
				document: FindPlaylistDocument,
				variables: {
					id,
					first: limit,
				},
			})
		).playlist
	}

	/** Fetch all the holograms for the currently logged in user */
	public async myHolograms(first: number = 50) {
		return (
			await this.request({
				document: MyHologramsDocument,
				variables: {
					first,
				},
			})
		).me
	}

	/**
	 * Upload a Looking Glass quilt and create a new hologram for this account
	 * @param file The image file to upload
	 * @param args The input data to create the hologram
	 */
	public async uploadAndCreateQuiltHologram(file: File, args: CreateQuiltHologramInputType) {
		const url = await this.uploadImage(file)

		return (
			await this.request({
				document: CreateQuiltHologramDocument,
				variables: { data: args },
			})
		).createQuiltHologram
	}

	/** Upload and convert a regular 2D image to a hologram for this account */
	public async uploadAndCreateRgbdHologram(file: File, data: CreateHologramFromImageInput) {
		const url = await this.uploadImage(file)

		return (
			await this.request({
				document: CreateRgbdHologramDocument,
				variables: { data },
			})
		).createHologramFromImage
	}

	/** Update a hologram */
	public async updateHologram(data: UpdateHologramInput) {
		return (
			await this.request({
				document: UpdateHologramDocument,
				variables: { data },
			})
		).updateHologram
	}

	private async uploadImage(file: File): Promise<string> {
		const data = await this.getS3PresignedPost(file)
		const formData = new FormData()

		Object.entries({ ...data.fields, file }).forEach(([key, value]) => {
			formData.append(key, value)
		})

		if (data?.url) {
			await fetch(data.url, {
				method: "POST",
				body: formData,
			})

			const imageUrl = `${data.url}/${data.fields?.key}`
			return imageUrl
		} else {
			throw new Error(data.error)
		}
	}

	/** Get the form fields and target URL for direct POST uploading. */
	private async getS3PresignedPost(file: File): Promise<PresignedPost> {
		const response = await fetch(this.args.apiUrl + "/api/upload", {
			method: "POST",
			body: JSON.stringify({
				file: file.name,
			}),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${this.args.token}`,
			},
		})

		if (response.status == 200) {
			return (await response.json()) as PresignedPost
		} else {
			return { error: `Response failed ${response.status}` }
		}
	}

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
	public async request<T = GraphqlDocument, V = Variables>(options: RequestOptions<V, T>): Promise<T> {
		const test: RequestExtendedOptions = {
			document: options.document,
			variables: options?.variables as Variables,
			url: this.args.apiUrl + "/api/graphql",
			requestHeaders: {
				Authorization: `Bearer ${this.args.token}`,
			},
		}
		return (await request(test)) as T
	}
}

export type GraphqlDocument = RequestDocument | TypedQueryDocumentNode<any, Variables> | string
