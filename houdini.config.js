/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://cdn.builder.io/api/v1/graphql/9479a5a70ce74366993f0c04854fd2b7'
	},
	plugins: {
		'houdini-svelte': {}
	},
	scalars: {
		/* in your case, something like */
		JSONObject: {
			// <- The GraphQL Scalar
			type: '[String: Any]' // <-  The TypeScript type
		}
	}
};

export default config;
