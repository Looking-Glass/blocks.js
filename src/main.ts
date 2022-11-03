import request from "graphql-request"
import { FindHologramDocument, MyHologramsDocument } from "./gql/graphql"

const apiUrl = "https://blocks.glass/api/graphql"

export class BlocksClient {
	private token: string

	constructor(token: string) {
		this.token = token
	}

	public async getHologram(id: number) {
		return await request(
			apiUrl,
			FindHologramDocument,
			{
				id: id.toString(),
			},
			{
				Authorization: `Bearer ${this.token}`,
			}
		)
	}

	public async getMyHolograms(first: number = 20) {
		return await request(
			apiUrl,
			MyHologramsDocument,
			{
				first,
			},
			{
				Authorization: `Bearer ${this.token}`,
			}
		)
	}
}
