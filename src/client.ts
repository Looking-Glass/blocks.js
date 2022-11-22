import request, { RequestExtendedOptions, RequestOptions, Variables } from "graphql-request"
import { BlocksSpaAuth } from "./auth"
import {
	CreateQuiltHologramDocument,
	CreateQuiltHologramInputType,
	FindHologramDocument,
	FindPlaylistDocument,
	FindPlaylistQuery,
	MeDocument,
	MyHologramsDocument,
} from "./gql/graphql"
import { PresignedPost, UploadUrlResponse } from "./types"

export const HOLOGRAM_QUILT_IMAGE_FORMATS = ["png", "jpg", "jpeg", "webp", "bmp"]
export const HOLOGRAM_QUILT_IMAGE_MIMETYPES = HOLOGRAM_QUILT_IMAGE_FORMATS.map((f) => `image/${f}`)

export interface BlocksClientArgs {
	token: string
	/**
	 * @default https://blocks.glass */
	apiUrl?: string
	/** @default https://blocks.glass/api/graphql */
	graphqlApiUrl?: string
}

export type UploadAndCreateHologramArgs = Omit<
	CreateQuiltHologramInputType,
	"width" | "height" | "imageUrl" | "fileSize"
>

const defaults: BlocksClientArgs = {
	token: "",
	apiUrl: "https://blocks.glass",
	graphqlApiUrl: "https://blocks.glass/api/graphql",
}

interface ImageSize {
	width: number
	height: number
}
export class BlocksClient {
	private auth: BlocksSpaAuth | undefined
	private args: BlocksClientArgs

	/** Initialize the BlocksClient with a valid JWT */
	constructor(args: BlocksClientArgs) {
		this.args = { ...defaults, ...args }
		console.log(this.args)
	}

	/** Return info about the currently signed in user */
	public async me() {
		return await this.api({
			document: MeDocument,
		})
	}

	/** Fetch a hologram */
	public async hologram(id: number) {
		return await this.api({
			document: FindHologramDocument,
			variables: {
				id: id.toString(),
			},
		})
	}

	/** Fetch a playlist
	 * @id The id of the playlist
	 * @limit Number of total holograms you want to load in
	 */
	public async playlist(id: number, limit: number = 100): Promise<FindPlaylistQuery> {
		return await this.api({
			document: FindPlaylistDocument,
			variables: {
				id,
				first: limit,
			},
		})
	}

	/** Fetch your public holograms */
	public async myHolograms(first: number = 20) {
		return await this.api({
			document: MyHologramsDocument,
			variables: {
				first,
			},
		})
	}

	/** Create a new hologram based upon an already uploaded S3 image URL */
	public async createQuiltHologram(data: CreateQuiltHologramInputType) {
		return await this.api({
			document: CreateQuiltHologramDocument,
			variables: { data },
		})
	}

	public async uploadAndCreateQuiltHologram(file: File, data: UploadAndCreateHologramArgs) {
		const imageSize = await this.getImageSizeFromFile(file)
		const url = await this.uploadImage(file)

		return await this.createQuiltHologram({
			...data,
			imageUrl: url,
			width: imageSize.width,
			height: imageSize.height,
			fileSize: file.size,
		})
	}

	public async uploadImage(file: File): Promise<string> {
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

	/** Load a image file into the page so we can get the dimensions */
	private async getImageSizeFromFile(file: File): Promise<ImageSize> {
		return new Promise<ImageSize>((resolve, reject) => {
			const img = document.createElement("img")
			img.src = URL.createObjectURL(file)
			img.style.display = "none"
			img.addEventListener("load", async () => {
				const size = {
					width: img.naturalWidth,
					height: img.naturalHeight,
				}

				document.body.removeChild(img)
				resolve(size)
			})

			img.addEventListener("error", () => {
				reject("Failed to get dimenisions from image")
			})

			document.body.appendChild(img)
		})
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
			return await response.json()
		} else {
			return { error: `Response failed ${response.status}` }
		}
	}

	// private async getS3SignedUploadUrl(file: File): Promise<UploadUrlResponse> {
	// 	const response = await fetch(this.args.apiUrl + "/api/upload", {
	// 		method: "POST",
	// 		body: JSON.stringify({
	// 			file: file.name,
	// 			uploadMode: "PUT",
	// 		}),
	// 		headers: {
	// 			["Content-Type"]: "application/json",
	// 			Authorization: `Bearer ${this.args.token}`,
	// 		},
	// 	})

	// 	if (response.status == 200) {
	// 		return await response.json()
	// 	} else {
	// 		return { error: `Response failed ${response.status}` }
	// 	}
	// }

	/** Call the GraphQL API directly  */
	public async api<T = any, V = Variables>(options: RequestOptions<V, T>): Promise<T> {
		const test: RequestExtendedOptions = {
			document: options.document,
			variables: options?.variables as Variables,
			url: this.args.graphqlApiUrl!,
			requestHeaders: {
				Authorization: `Bearer ${this.args.token}`,
			},
		}
		return await request(test)
	}
}
