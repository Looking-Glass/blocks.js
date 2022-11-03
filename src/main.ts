import { TypedQueryDocumentNode } from "graphql"
import request, { RequestDocument, RequestExtendedOptions, RequestOptions, Variables } from "graphql-request"
import { FindHologramDocument, MyHologramsDocument } from "./gql/graphql"

const apiUrl = "https://blocks.glass/api/graphql"

export class BlocksClient {
	private token: string

	constructor(token: string) {
		this.token = token
	}

	public async getHologram(id: number) {
		return await this.api({
			document: FindHologramDocument,
			variables: {
				id: id.toString(),
			},
		})
	}

	public async getMyHolograms(first: number = 20) {
		return await this.api({
			document: MyHologramsDocument,
			variables: {
				first,
			},
		})
	}

	private async api<T = any, V = Variables>(options: RequestOptions<V, T>): Promise<T> {
		const test: RequestExtendedOptions = {
			document: options.document,
			url: apiUrl,
			requestHeaders: {
				Authorization: `Bearer ${this.token}`,
			},
		}
		return await request(test)
	}
}
