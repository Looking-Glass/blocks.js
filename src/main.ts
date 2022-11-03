import request, { RequestExtendedOptions, RequestOptions, Variables } from "graphql-request"
import { FindHologramDocument, MeDocument, MyHologramsDocument } from "./gql/graphql"

const apiUrl = "https://blocks.glass/api/graphql"

export class BlocksClient {
	private token: string

	/** Initialize the BlocksClient with a valid JWT */
	constructor(token: string) {
		this.token = token
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

	/** Fetch your public holograms */
	public async myHolograms(first: number = 20) {
		return await this.api({
			document: MyHologramsDocument,
			variables: {
				first,
			},
		})
	}

	/** Call the GraphQL API directly  */
	public async api<T = any, V = Variables>(options: RequestOptions<V, T>): Promise<T> {
		const test: RequestExtendedOptions = {
			document: options.document,
			variables: options?.variables as Variables,
			url: apiUrl,
			requestHeaders: {
				Authorization: `Bearer ${this.token}`,
			},
		}
		return await request(test)
	}
}
