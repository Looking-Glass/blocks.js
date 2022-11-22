export interface UploadUrlResponse {
	/**
	 * The URL to upload to
	 */
	url?: string
	error?: string
}

export interface PresignedPost {
	/**
	 * The URL that should be used as the action of the form.
	 */
	url?: string

	/**
	 * The fields that must be included as hidden inputs on the form.
	 */
	fields?: Fields
	error?: string
}

export interface Fields {
	/**
	 * A base64-encoded policy detailing what constitutes an acceptable POST
	 * upload. Composed of the conditions and expiration provided to
	 * s3.createPresignedPost
	 */
	Policy: string

	/**
	 * A hex-encoded HMAC of the POST policy, signed with the credentials
	 * provided to the S3 client.
	 */
	"X-Amz-Signature": string

	/**
	 * Additional keys that must be included in the form to be submitted. This
	 * will include signature metadata as well as any fields provided to
	 * s3.createPresignedPost
	 */
	[key: string]: string
}
